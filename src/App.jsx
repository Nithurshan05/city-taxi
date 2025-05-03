// import { Background } from "./Pages/Background/Background";
// import { NavBar } from "./Pages/NavBar/NavBar";
// import { Hero } from "./Pages/Hero/Hero";
import { Login } from "./Pages/LoginPage/Login";
import { Registration } from "./Pages/LoginPage/Registration";
import { ForgotPassword } from "./Pages/LoginPage/ForgotPassword";
import { ResetPassword } from "./Pages/LoginPage/ResetPassword";
import { SendCode } from "./Pages/LoginPage/SendCode";
import { ScrollAnimation } from "./Pages/ScrollAnimation/ScrollAnimation.jsx";
import Home from "./Pages/Home/Home";
import {About} from "./Pages/About/About.jsx";
import {Booking} from './Pages/BookTaxi/BookTaxi.jsx';
import {Footer} from './Pages/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  
  return (
    <div>
      {/* <Background/>
      <NavBar /> */}
      {/* <Registration /> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      {/* <SendCode/> */}
      {/* <ScrollAnimation/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Booking/> */}
      {/* <Footer/> */}
      <BrowserRouter>
      <ScrollAnimation />
    </BrowserRouter>
      <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="./Pages/ScrollAnimation" element={<ScrollAnimation />} />
          <Route path="./Pages/Home/Home.jsx" element={<Home />} />
          <Route path="./Pages/About/About.jsx" element={<About />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App;