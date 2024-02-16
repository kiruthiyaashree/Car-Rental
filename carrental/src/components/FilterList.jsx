import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const FilterList = () => {
    const [carDetails, setCarDetails] = useState([]);
    const [username,setUserName]=useState("");
    const navigate=useNavigate();
    useEffect(() => {
        const username = localStorage.getItem('userName').replace(/"/g,'');
        setUserName(username);
        const handleStorageChange = async() => {
            try {
                const car_details = await axios.get("http://localhost:5000/car-details");
                // console.log(car_details.data);
                const d =car_details.data;
                const f_values = JSON.parse(localStorage.getItem('FilteredValues'));
                // console.log(f_values);
    
                if (f_values && f_values.responseResults && f_values.responseResults.length > 0) {
                    setCarDetails(f_values.responseResults);
                } else {
                    setCarDetails(d);
                }
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        handleStorageChange();
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []); 
    
    const handleRenting=(car)=>
    {
        if(username)
        {
            navigate("/renting",{state : { carDetails : car}});
            // setUserName(username);
        }
        else{
            navigate("/signin");
        }
    }
    const handleBack=()=>
    {
        navigate("/");
    }
    const handleProfile=()=>
    {
        navigate("/profile");
    }
    return (
        <div >
            <br/>
            <br/>
            <br/>
            <div className='mx-12 flex justify-between items-center'>
                    <button onClick={handleBack} className='flex p-2 hover:bg-gray-400 hover:rounded-xl hover:p-2'><ArrowBackIcon/></button>
                    <p onClick={handleProfile} className=" cursor-pointer font-bold flex items-center"><PersonOutlineIcon/>{username}</p>
                </div>
            <hr className='border border-black mx-12'/>
            <br/>
            <br/>

        <div className="flex flex-col justify-center">
            <Search/>
            <br/>
            <br/>
            <br/>

            <h2 className='text-center text-2xl font-bold'>Car Details</h2>
        
        <div className="flex justify-center m-32">
            <ul className='grid grid-cols-3 gap-10 '>
                {/* Render the list of car details */}
                {
                    carDetails.map((car,index)=>
                    {
                        return (
                            <div key={index} className="border rounded-lg flex justify-center items-center border-gray-400">
                        <div className='p-4 '>
                            <img src={car.image} className='h-[15em]' alt="reloading page"/>
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
                                <button className="border px-6 py-2 rounded-md border-blue-800 text-blue-800" onClick={()=>handleRenting(car)}>Rent Car</button>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
        </div>
        </div> 
    );
};

export default FilterList;
