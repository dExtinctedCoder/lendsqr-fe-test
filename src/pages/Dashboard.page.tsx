import Nav from "../component/Nav"
import PageContentGrid from "../component/PageContentGrid"
import SideBar from "../component/SideBar"
import '../styles/dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard__control'>
      <Nav />
      <PageContentGrid SideBar={<SideBar/>} MainComponent={<DashboardMain />} />
    </div>
  )
}

export const DashboardMain = () => {
  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  )
}

export default Dashboard