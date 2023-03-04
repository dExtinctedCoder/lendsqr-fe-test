import './index.scss'
import { QueryClient, QueryClientProvider } from "react-query"
import AuthContextProvider from './assets/context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.page'
import Dashboard from './pages/Dashboard.page'
import UserDetail from './pages/UserDetail'
import AppContextProvider from './assets/context/AppContext'

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppContextProvider>
          <div className="App">
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/dashboard'element={<Dashboard />}></Route>
              <Route path='/login'element={<Login />}></Route>
              <Route path='/user/details/:id'element={<UserDetail />}></Route>
            </Routes>
          </div>
        </AppContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
