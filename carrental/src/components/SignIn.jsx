import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
    const [signinFormData, setSigninFormData] = useState({
        email_verify: '',
        password_verify: '',
    });

    const handleChangeSignIn = (e) => {
        const { name, value } = e.target;
        setSigninFormData({ ...signinFormData, [name]: value });
    };

    const handleSubmitSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/signin", signinFormData);
            if(response.data.message=="User not found!" || response.data.message == "wrong credentials")
            {
                toast.error(response.data.message);
            }
            else{
                toast.success(response.data.message); 
            }// Display success message from the server
            setSigninFormData({
                email_verify: '',
                password_verify: '',
            });
        } catch (error) {
                toast.error("Error occurred during signing in!");
        }
    };
    return (
        <div className="">
            <form className="flex justify-center items-center min-h-[100vh]" onSubmit={handleSubmitSignIn}>
                <fieldset className="border border-black w-fit p-32 rounded-xl">
                    <h2 className="text-2xl text-center font-bold mb-4">Signin</h2>
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="Email" id="email_verify" name="email_verify" value={signinFormData.email_verify} onChange={handleChangeSignIn} />
                    <br />
                    <input type="password" className="border border-black p-3 rounded-md my-3" placeholder="Password" id="password_verify" name="password_verify" value={signinFormData.password_verify} onChange={handleChangeSignIn} />
                    <br />
                    <div className="flex justify-center my-3">
                        <button type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Signin</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignIn;
