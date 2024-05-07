import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile =()=>
{
    const navigate=useNavigate();
    const [rentedCarInfos,setRentedCarInfos] = useState([]);
    const [username,setUserName] = useState("");
    const handleBack=()=>
    {
        navigate("/");
    }
    useEffect(()=>
    {
        const username=localStorage.getItem('userName').replace(/"/g,'');
        // console.log(username);
        setUserName(username);
        const fetchRentedCarDetails=async()=>{
            try{
                const response = await axios.post("https://car-rental-website-oy1l.onrender.com/rentedCarDetails",{username});
                setRentedCarInfos(response.data);
                // console.log(rentedCarInfos.responseRentedCarDetails);
            }
            catch(error)
            {
                console.log("fetching error on user rented car details");
                toast.error("error occured on fetching");
            }
        }
        fetchRentedCarDetails();
    },[username]);
    const handleRenting=async(e,car)=>
    {
        try{
            // console.log(car.carId);
            await axios.post("https://car-rental-website-oy1l.onrender.com/cancelingCar",{car});
            fetchRentedCarDetails();
        }
        catch(error)
        {
            toast.error("error occuring on canceling!");
            console.log("error",error);
        }
    }
    return (
        <>
            <div className="m-12">
                <div className='flex justify-between items-center'>
                    <button onClick={handleBack} className='flex p-2 hover:bg-gray-400 hover:rounded-xl hover:p-2'><ArrowBackIcon/></button>
                    <p className="font-bold flex items-center"><PersonOutlineIcon/>{username}</p>
                </div>
                {/* rented car details */}
            <hr className='border border-black'/>
                <br/>
                <div className='grid grid-cols-3 gap-x-10'>
                    {Array.isArray(rentedCarInfos.responseRentedCarDetails) && rentedCarInfos.responseRentedCarDetails.map((car, index) => (
                            <div key={index} className="border rounded-lg flex justify-center items-center border-gray-400">
                        <div className='p-4 '>
                            <div className='flex justify-center'>
                            <img src={car.image} className='w-[50%] ' alt="reloading page"/>
                            </div>
                            <br/>

                            <div className='flex justify-between py-1'>
                            <p>{car.name}</p>
                            <p>{car.cartype}</p>
                            <p>{car.review}</p>
                            </div>

                            <div className="flex justify-between py-1">
                                <p>{car.seat} seat</p>
                                <p>{car.year}</p>
                                <p>{car.fuel}</p>
                            </div>

                            <div className="flex justify-between py-1">
                                <p>{car.doors}</p>
                                <p>{car.persons}</p>
                                <p> {car.kms}</p>
                            </div>
                            <br/>
                            <hr className='border border-t-2 border-gray-400 border-dotted'/>
                            <br/>
                            <div className='flex justify-around items-center'>
                                <p>${car.pay} /Day</p>
                                <button className="border px-6 py-2 rounded-md border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white" onClick={(e)=>handleRenting(e,car)}>Cancel</button>
                            </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
};
export default Profile;