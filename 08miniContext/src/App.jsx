
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile.JSX'
function App() {
  

  return (
    <UserContextProvider>
    <h1>Understanding Context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
