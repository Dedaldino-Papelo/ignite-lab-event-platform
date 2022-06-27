import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import Router from "./components/Router"


function App() {

  return (
    <div className="App">
      <ApolloProvider client={client}>    
        <Router />
      </ApolloProvider>
    </div>
  )
}

export default App
