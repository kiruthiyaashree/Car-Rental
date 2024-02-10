import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
const SignUp=()=>
{
    const navigate=useNavigate();
    const [signup_form_data,setSignupFormData]=useState(
        {
            username:'',
            email:'',
            password:'',
            confirm_password:'',
        }
    )   
    const handleChange=(e)=>
    {
        const {name ,value} = e.target;
        setSignupFormData({...signup_form_data,[name]:value});
        
    }
    const validateEmail = (text) => {
        if (!text || typeof text !== 'string') {
            return false;
        }
    
        const index = text.indexOf('@'); 
        if (index > 0 && index < text.length - 1) {
            const validStringForEmail = text.slice(index);
            return validStringForEmail.endsWith('@gmail.com'); 
        }
    
        return false; 
    };
    
    const validatePassword=(text)=>
    {
        return text.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateEmail(signup_form_data.email)){
            if(signup_form_data.password === signup_form_data.confirm_password){
                if(validatePassword(signup_form_data.password)){
                    try {
                        const response=await axios.post("http://localhost:5000/signup", signup_form_data);
                        if(response.data.message == 'Username already exists')
                        {
                            toast.warning(response.data.message);
                            setSignupFormData(prevData=>(
                                {
                                    ...prevData,
                                    username:'',
                                }
                            ));
                        }
                        else{
                            toast.success(signup_form_data.username+" Signed up successfully!");
                            setSignupFormData({
                                username: '',
                                email: '',
                                password: '',
                                confirm_password:'',
                            });
                            navigate("/");
                        }
                    } catch (error) {
                        console.error("Error in signing up", error);
                        toast.error("Error occurred during signup");
                    }
                }
                else{
                    toast.warning('Password should contain atleast 8 - 15 characters, 1 special character, 1 digit and 1 uppercase!');
                }
            }
            else{
                toast.warning('password mismatch');
            }
        }
        else{
            toast.warning('Email is Invalid');
        }
    }
    const [isShowPassword,setIsShowPassword]=useState(false);
    return (
        <>
            <div className="">
                <form className="flex justify-center items-center min-h-[100vh]" onSubmit={handleSubmit}>
                    <fieldset className="border border-black w-fit px-20 py-12 rounded-xl">
                    <h2 className="text-2xl text-center font-bold mb-4">Signup</h2>
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="username" id="username" name="username" value={signup_form_data.username} onChange={handleChange}/>
                    <br/>
                    
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="email"id="email" name="email" value={signup_form_data.email} onChange={handleChange}/>
                    <br/>
                    <input type={isShowPassword ? 'text' : 'password'} className="border border-black p-3 rounded-md my-3" placeholder="password" id="password" name="password" value={signup_form_data.password} onChange={handleChange}/>
                    <br/>
                    <input type={isShowPassword ? 'text' : 'password'} className="border border-black p-3 rounded-md my-3" placeholder="confirm password" id="confirm_password" name="confirm_password" value={signup_form_data.confirm_password} onChange={handleChange}/>
                    <br/>
                    <input type="checkbox" id="showPassword" className="mr-1" onChange={()=>setIsShowPassword(!isShowPassword)}/>Show Password
                    <br/>
                    <div className="flex justify-center my-3">
                        <button type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Signup</button>
                    </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
export default SignUp