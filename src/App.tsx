import './index.scss'
import { QueryClient, QueryClientProvider } from "react-query"

export const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Lendsqr</h1>
      </div>
    </QueryClientProvider>
  )
}

export default App
