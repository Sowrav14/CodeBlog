import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import HomePage from "./pages/Home"
import ResponsiveAppBar from "./components/Appbar"
import Profile from "./pages/Profile"
import Account from "./pages/account"
import Dashboard from "./pages/Dashboard"
import Writer from "./pages/Writeblog"
import Blog from "./pages/Blog"




function App() {

  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path='/profile' element={ <Profile/> } />
          <Route path='/account' element={ <Account/> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
          <Route path='/feeds' element={ <HomePage/> } />
          <Route path='/feeds/feed/:id' element={ <Blog/> } />
          <Route path='/feeds/feed' element={ <Blog/> } />
          <Route path='/profile/:id' element={ <Profile/> } />
          <Route path='/writer' element={ <Writer/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
