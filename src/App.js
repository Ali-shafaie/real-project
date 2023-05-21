import { BrowserRouter as Router, Routes,Route } from "react-router-dom";


import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Forgotpassword from './pages/Forgotpassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import HeaderPage from "./components/HeaderPage";
function App() {
  return (
    <>
    <Router>
    <HeaderPage/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
