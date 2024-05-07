import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const List=()=>
{
    const [carDetails, setCarDetails] = useState([]);
    const navigate=useNavigate();


    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get('https://car-rental-website-oy1l.onrender.com/car-details');
                setCarDetails(response.data);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };

        fetchCarDetails();
    }, []); 
    const handleRenting=async(e)=>
    {
        e.preventDefault();
        const username=localStorage.getItem('userName');
        if(!username)
        {
            navigate("/signin");
        }
        else{
            navigate("/renting");
        }
    }
    return (
        <>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold">Latest <span className="text-blue-800">Inventory</span></h1>
                <br/>
                <p className="">Experience The Future Of Automotive Innovation With Our Latest Car Models</p>
            </div>
            <br/>
            <br/>
            <br/>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-10 w-[75%]">
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
                                    <p>{car.kms}</p>
                                </div>
                                <br/>
                                <hr className='border border-t-2 border-gray-400 border-dotted'/>
                                <br/>
                                <div className='flex justify-around items-center'>
                                    <p>${car.pay} /Day</p>
                                    <button onClick={(e)=>handleRenting(e)} className="border px-6 py-2 rounded-md border-blue-800 text-blue-800">Rent Car</button>
                                </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <br/>
            <br/>
            <div className='flex justify-center'>
                <button className='px-12 py-2 font-bold text-white bg-blue-800 rounded-md '>See All</button>
            </div>
        </>
    )
}
export default List