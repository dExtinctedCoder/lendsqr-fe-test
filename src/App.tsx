import './index.scss'
import { QueryClient, QueryClientProvider } from "react-query"
import AuthContextProvider from './assets/context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.page'
import Dashboard from './pages/Dashboard.page'
import UserDetail from './pages/UserDetail'
import AppContextProvider from './assets/context/AppContext'
import Error from './pages/Error'
import Require from './component/Require'

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppContextProvider>
          <div className="App">
            <Routes>
              <Route path='/' element={<Require><Dashboard /></Require>}></Route>
              <Route path='/dashboard'element={<Require><Dashboard /></Require>}></Route>
              <Route path='/login'element={<Login />}></Route>
              <Route path='/user/details/:id'element={<Require><UserDetail /></Require>}></Route>
              <Route path='*' element={<Error />}></Route>
            </Routes>
          </div>
        </AppContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
