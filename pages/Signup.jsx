import { useState } from "react"
import { Bottominfo } from "../components/Bottominfo"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Inputbox } from "../components/Inputbox"
import { Subheading } from "../components/Subheading"
import axios from "axios";


export const Signup=()=>{
    const [firstname, setFirstname]=useState("");
    const [lastname, setLastname]=useState("");
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    
    
    
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Header label={"SIGN UP"}/>
        <Subheading label={"Enter details to sign up "}/>
        <Inputbox onChange={(e)=>{
            setFirstname(e.target.value);
        }} placeholder="shubham" label={"First Name"} />
        <Inputbox onChange={(e)=>{
            setLastname(e.target.value);
        }} placeholder="jadhav" label={"Last Name"} />
        <Inputbox onChange={(e)=>{
            setUsername(e.target.value);
        }} placeholder="abc@gmail.com" label={"Email"} />
        <Inputbox onChange={(e)=>{
            setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstname,
              lastname,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}  label={"Sign up"} />
        </div>

        <Bottominfo label={"Already have account?"} btntext={"Sign In"} to={"/signin"}/>
            </div>
        </div>
    </div>
}