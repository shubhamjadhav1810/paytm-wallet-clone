import {BrowserRouter,Routes,Route, Router}from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { Dashboard } from "../pages/Dashboard";
//import { Sendmoney } from "../pages/Sendmoney";


function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/sendmoney" element={<Sendmoney/>}/> */}
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
