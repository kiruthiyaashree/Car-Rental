import axios from "axios";
import { useState } from "react";
import {toast} from 'react-toastify';
const SignUp=()=>
{
    const [signup_form_data,setSignupFormData]=useState(
        {
            username:'',
            email:'',
            password:'',
        }
    )
    const handleChange=(e)=>
    {
        const {name ,value} = e.target;
        setSignupFormData({...signup_form_data,[name]:value});
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/signup", signup_form_data);
            toast.success(signup_form_data.username+" Signed up successfully!");
            setSignupFormData({
                username: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error("Error in signing up", error);
            toast.error("Error occurred during signup");
        }
    }
    return (
        <>
            <div className="">
                <form className="flex justify-center items-center min-h-[100vh]" onSubmit={handleSubmit}>
                    <fieldset className="border border-black w-fit p-32 rounded-xl">
                    <h2 className="text-2xl text-center font-bold mb-4">Signup</h2>
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="username" id="username" name="username" value={signup_form_data.username} onChange={handleChange}/>
                    <br/>
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="email"id="email" name="email" value={signup_form_data.email} onChange={handleChange}/>
                    <br/>
                    <input type="password" className="border border-black p-3 rounded-md my-3" placeholder="password" id="password" name="password" value={signup_form_data.password} onChange={handleChange}/>
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