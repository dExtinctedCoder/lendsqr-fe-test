import './index.scss'
import { QueryClient, QueryClientProvider } from "react-query"
import AuthContextProvider from './assets/context/AuthContext'

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="App">
          <h1>Lendsqr</h1>
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
