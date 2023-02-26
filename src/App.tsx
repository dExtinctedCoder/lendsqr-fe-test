import './index.scss'
import { QueryClient, QueryClientProvider } from "react-query"
import AuthContextProvider from './assets/context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.page'
import Dashboard from './pages/Dashboard.page'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/dashboard'element={<Dashboard />}></Route>
            <Route path='/login'element={<Login />}></Route>
            <Route path='/users'element={<Users />}></Route>
            <Route path='/user/details'element={<UserDetail />}></Route>
          </Routes>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
