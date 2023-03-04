import { Link, useLocation } from "react-router-dom"
import Nav from "../component/Nav"
import PageContentGrid from "../component/PageContentGrid"
import SideBar from "../component/SideBar"
import '../styles/user-detail.scss'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useState, useContext, useEffect } from "react"
import GeneralDetails from "../component/GeneralDetails"
import BankDetails from "../component/BankDetails"
import Documents from "../component/Documents"
import Loans from "../component/Loans"
import Savings from "../component/Savings"
import AppSystem from "../component/App-System"
import { AppContext } from "../assets/context/AppContext"
import { useQuery } from "react-query"

const UserDetail = () => {
  return (
    <div className='dashboard__control'>
      <Nav />
      <PageContentGrid SideBar={<SideBar />} MainComponent={<DetailsMain />} />
    </div>
  )
}

export const DetailsMain = () => {

  const currentPath = useLocation()
  const pathArr = currentPath.pathname.split('/')
  const {navHeight} = useContext(AppContext)
  const [profileTab, setProfileTab] = useState('general-details')
  const [userInfo, setUserInfo] = useState({} as any)

  const onSuccess = (data: any) => {
    console.log('object');
    window.localStorage.setItem(data.id, JSON.stringify(data))
    setUserInfo(data)
  }
  
  const fetchUser = async () => {
    const res = fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${pathArr[pathArr.length-1]}`)
    const data = res.then(res => res.json())
    const error = res.catch(err => err)
    return data || error
  }

  const {isLoading, isError, refetch} = useQuery(
    ['users'],
    fetchUser,
    {
      onSuccess,
      enabled: false
    }
  )
    
  useEffect(() => {
    const user = window.localStorage.getItem(pathArr[pathArr.length-1])
    if (user) setUserInfo(JSON.parse(user)) 
    else refetch()
  
  }, [])

  const userInfoObj = Object.keys(userInfo)
  
  const getCurrentTab = () => {
    switch (profileTab) {
      case 'general-details':
        return <GeneralDetails
          key={userInfo.id}
          bvn={Number(userInfo.profile.bvn)}
          email={userInfo.email}
          firstName={userInfo.profile.firstName}
          lastName={userInfo.profile.lastName}
          currency={userInfo.profile.currency}
          gender={userInfo.profile.gender}
          phone={userInfo.profile.phoneNumber}
          maritalStatus='single'
          children='None'
          typeOfRes={userInfo.profile.address}  
          twitter={userInfo.socials.twitter}
          facebook={userInfo.socials.facebook}
          instagram={userInfo.socials.instagram}
          durOfEmployment={userInfo.education.duration}
          employmentStatus={userInfo.education.employmentStatus}
          levelOfEdu={userInfo.education.level}
          loanRepayment={userInfo.education.loanRepayment}
          secOfEmploment={userInfo.education.sector}
          officeMail={userInfo.education.officeEmail}
          monthlyIncome={userInfo.education.monthlyIncome}
          guarantor={{email: userInfo.guarantor.address, fName: userInfo.guarantor.firstName, lName: userInfo.guarantor.lastName, phone: userInfo.guarantor.phoneNumber, relationship: userInfo.guarantor.gender}}
        />

      case 'documents':
        return <Documents />

      case 'bank-details':
        return <BankDetails />

      case 'loans':
        return <Loans />

      case 'savings':
        return <Savings />

      case 'app-system':
        return <AppSystem />

      default:
        return null
    }
  }
  const getStyle = (info: string) => {
    return {
      color: profileTab === info ? '#39CDCC' : '',
      borderColor: profileTab === info ? '#39CDCC' : ''
    }
  }

  return (
    <main style={{maxHeight: `calc(100vh - ${navHeight}px)`}}>
      <div className="nav__back">
        <Link to='/dashboard'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
          </svg>
          <span>Back to Users</span>
        </Link>
      </div>
      <div className="head__info">
        <h4>User Details</h4>
        <div className="cta__box">
          <button onClick={() => alert(`user has been blacklisted`)} id="blacklist--user__btn">Blacklist User</button>
          <button onClick={() => alert(`user has been activated`)} id="activate--user__btn">Activate User</button>
        </div>
      </div>
      <section className="profile__nav">
        <div>
          <div>
            <div className="avatar__box"><img src={userInfoObj.length ? userInfo.profile.avatar : ''} alt="" /></div>
            <div>
              <h5>{userInfoObj.length ? userInfo.userName : ''}</h5>
              <span>{userInfoObj.length ? userInfo.accountNumber : ''}</span>
            </div>
          </div>
          <div>
            <span>User's Tier</span>
            <span>
              <AiFillStar fontSize={16} color='#E9B200' />
              <AiOutlineStar fontSize={16} color='#E9B200' />
              <AiOutlineStar fontSize={16} color='#E9B200' />
            </span>
          </div>
          <div>
            <h5>{userInfoObj.length ? userInfo.accountBalance : ''}</h5>
            <h6>9912345678/Providus Bank</h6>
          </div>
        </div>
        <nav>
          <ul>
            <li style={getStyle('general-details')} onClick={() => setProfileTab('general-details')}>General Details</li>
            <li style={getStyle('documents')} onClick={() => setProfileTab('documents')}>Documents</li>
            <li style={getStyle('bank-details')} onClick={() => setProfileTab('bank-details')}>Bank Details</li>
            <li style={getStyle('loans')} onClick={() => setProfileTab('loans')}>Loans</li>
            <li style={getStyle('savings')} onClick={() => setProfileTab('savings')}>Savings</li>
            <li style={getStyle('app-system')} onClick={() => setProfileTab('app-system')}>App and System</li>
          </ul>
        </nav>
      </section>
      {
        userInfoObj.length ? getCurrentTab() : ''
      }
    </main>
  )
}
export default UserDetail