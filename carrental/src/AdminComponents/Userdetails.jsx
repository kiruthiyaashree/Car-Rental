import ArrowBack from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Userdetails=()=>
{
    const navigate=useNavigate();
    const [userdetails,setUserDetails] = useState([]);
    useEffect(()=>
    {
        const handleFetchUserDetails=async()=>
        {
            try{
                const response = await axios.get("http://localhost:5000/fetch-userDetails");
                setUserDetails(response.data);
                // console.log(response.data);
            }
            catch(error)
            {
                console.log(error);
                toast.error("error on fetching the user details");
            }
        }
        handleFetchUserDetails();
    },[])
    const handleBack=()=>
    {
        navigate("/adminhome");
    }
    return (
        <>
        <br/>
            <div className="">
                <button type="submit" className="m-2 p-2 hover:bg-blue-800/10 hover:rounded-xl" onClick={handleBack}>
                    <ArrowBack/>
                </button>
                <div className="flex justify-center">
                            <h1 className="font-bold text-3xl text-center pb-2">User Details</h1>
                </div>
            </div>
            <hr className="border border-black mx-12"/>
        <br/>
        <br/>
        <br/>

            <div className="flex justify-center">
                
            <div className="flex flex-col gap-y-10">
            {
                userdetails.map((user,index)=>
                {
                    return (
                        <div key={index} className="flex items-center justify-evenly border border-black rounded-xl bg-blue-800/10 w-[75rem] p-10">
                            <img alt="reloading" className="w-[25%]" src={user.image}/>
                            <div className="flex flex-col">
                            <p className="font-bold text-center text-xl underline">username :{user.username}</p>
                            <br/>
                                <div className="grid grid-cols-3 gap-y-2 gap-x-10">
                                
                                <p>car name : {user.name}</p>
                                <p>seats : {user.seat}</p>
                                <p>year : {user.year}</p>
                                <p>fuel : {user.fuel}</p>
                                <p>doors : {user.doors}</p>
                                <p>persons : {user.persons}</p>
                                <p>kms : {user.kms}</p>
                                <p>pay : {user.pay}</p>
                                <p>days renting : {user.daysRenting}</p>
                                <p>cars : {user.carsCount}</p>
                                <p>check-In-Date : {user.checkInDate}</p>
                                <p>check-Out-Date : {user.checkOutDate}</p>
                                <p>check-In-Time : {user.checkInTime}</p>
                                <p>check-Out-Time : {user.checkOutTime}</p>
                                <p>total : ${user.total}</p>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
            
            </div>
            </div>
        </>
    )
}
export default Userdetails;