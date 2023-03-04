import {Fragment} from 'react'
import Card from "../component/Card"
import Nav from "../component/Nav"
import PageContentGrid from "../component/PageContentGrid"
import SideBar from "../component/SideBar"
import '../styles/dashboard.scss'
import Icon1 from '../assets/media/icon.svg'
import Icon2 from '../assets/media/icon (1).svg'
import Icon3 from '../assets/media/icon (2).svg'
import Icon4 from '../assets/media/icon (3).svg'
import ListItem from "../component/ListItem"
import {IoFilterSharp} from 'react-icons/io5'
import {IoIosArrowDown} from 'react-icons/io'
import { createContext, useContext, useState, useRef, useMemo } from "react"
import { AppContext } from "../assets/context/AppContext"
import { useQuery } from "react-query"
import { TableContextType, TableTabContextType } from "../types/context.type"
import Pagination from '../component/Pagination';
import Filter from "../component/Filter"
import Loader from '../component/Loading'

let PageSize = 10;

export const TableStateContext = createContext({} as TableContextType)
const Dashboard = () => {

  const {} = useContext(TableStateContext)
  const [showDetail, setShowDetail] = useState(false)

  const closeMenu = () => {
    setShowDetail(false)
  }
  const menuRef = useRef<HTMLDivElement>(null)

  const menuBtnRef = useRef<HTMLSpanElement>(null)

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
  }

  return (
    <TableStateContext.Provider value={{showDetail, setShowDetail, menuRef, menuBtnRef}}>
      <div className='dashboard__control' onClick={(e: React.MouseEvent) => handleClick(e)}>
        <Nav />
        <PageContentGrid SideBar={<SideBar/>} MainComponent={<DashboardMain />} />
      </div>
    </TableStateContext.Provider>
  )
}

export const TableTabContext = createContext({} as TableTabContextType)
export const DashboardMain = () => {

  const {navHeight} = useContext(AppContext)

  const usersListFilters = [
    'Organization',
    'Username',
    'Email',
    'Phone number',
    'Date joined',
    'Status',
  ]

  const [allUsersData, setAllUsersData] = useState([{} as any])
  const [currentPage, setCurrentPage] = useState(1);
  const [navTabVal, setNavTabVal] = useState(100)
  const [isTabOpen, setIsTabOpen] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [filterBoxState, setFilterBoxState] = useState(false)
  const obj = [20, 40, 50, 60, 80, 100]
  
  const onSuccess = (data: [object]) => {
    setAllUsersData(data)
  }
  
  const fetchUser = async () => {
    const res = fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    const data = res.then(res => res.json())
    const error = res.catch(err => err)
    
    return data || error
  }

  const {isLoading, isError, refetch} = useQuery(
    ['users'],
    fetchUser,
    {
      onSuccess,
    }
    )

  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allUsersData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allUsersData]);
    
  const defaultFieldVal = {
    orgName: '',
    userName: '',
    email: '',
    createdAt: '',
    phoneNumber: '',
    status: '',
  }
  const [filterFieldsVal, setFilterFieldsVal] = useState(defaultFieldVal)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFilterFieldsVal(defaultFieldVal)
    setIsFilterOpen(true)
    setFilterBoxState(false)
  }

  if (isError) {
    return (
      <main className='error__main'>
        <h2>Something went wrong!</h2>
        <p onClick={() => refetch()}>refresh page</p>
      </main>
    )
  }

  return (
    <main style={{maxHeight: `calc(100vh - ${navHeight}px)`}}>
      {
        isLoading ? <Loader /> : 
        <Fragment>
          <h4>Users</h4>
          <div className="card--box__control">
            <Card icon={Icon3} title='User' count={2453} />
            <Card icon={Icon1} title='Active Users' count={2453} />
            <Card icon={Icon2} title='Users with Loans' count={12453} />
            <Card icon={Icon4} title='Users with Savings' count={102453} />
          </div>
          <table>
            <thead>
              <tr>
                {
                  usersListFilters.map(filter => {
                    return (
                      <Fragment>
                        <th key={filter}><span onClick={() => setFilterBoxState(!filterBoxState)}>{filter} <IoFilterSharp fontSize={18} /></span></th>
                      </Fragment>
                    )
                  })
                }
              </tr>
              {filterBoxState && <Filter defaultFieldVal={defaultFieldVal} filterFieldsVal={filterFieldsVal} onSubmit={onSubmit} setFilterFieldsVal={setFilterFieldsVal} />}
            </thead>
            <tbody>
              {
                !isFilterOpen ? 
                  <Fragment>
                    {
                      allUsersData.length > 1 ? 
                      (currentTableData).map(user => {
                        return <ListItem key={user.id} id={user.id} date={user.createdAt} email={user.email} org={user.orgName} phone={user.phoneNumber} status="Pending" username={user.userName} />
                      }) : null
                    }
                  </Fragment> : 
                  <Fragment>
                    
                  </Fragment>
              }
            </tbody>
          </table>
          <TableTabContext.Provider value={{totalCount, setTotalCount}}>
            <div className="table__nav">
              <div className='nav__tab'>
                <span>Showing</span>
                <div>
                  <span onClick={() => setIsTabOpen(!isTabOpen)}>{navTabVal} <IoIosArrowDown fontSize={16} color='#213F7D' /></span>
                  {
                    isTabOpen ? 
                      <ul>
                        {
                          obj.map((item) => {
                            if (item !== totalCount) return <li key={item} onClick={() => {setNavTabVal(item); setIsTabOpen(false); setTotalCount(item)}}>{item}</li>
                          })
                        }
                      </ul> : null
                  }
                </div>
                <span>out of 100</span>
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          </TableTabContext.Provider>
        </Fragment>
      }
    </main>
  )
}

export default Dashboard