import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Renting = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const carDetails= location.state  && location.state.carDetails ? location.state.carDetails : {};
    // console.log(carDetails);
    const [rentedCar,setRentedCar] = useState({
        username:'',
        image:'',
        name: '',
        seat: '',
        year: '',
        fuel: '',
        doors: '',
        persons: '',
        kms: '',
        pay: '',
        daysRenting:1,
        carsCount:1,
        checkInDate:'',
        checkOutDate:'',
        checkInTime:'',
        checkOutTime:'',
        total:carDetails.pay,
    });
    const handleChange=(e,property)=>
    {
            setRentedCar({...rentedCar,[property] : e.target.value});
    }
    const handleBack=()=>
    {
        navigate("/filters");
    }
    useEffect(()=>
    {
        if(Object.keys(carDetails).length === 0)
        {
            navigate("/filters");
        }
        const username=localStorage.getItem('userName').replace(/"/g,'');
        setRentedCar(prevState =>({...prevState,username:username}))
    },[]);
    useEffect(()=>
    {
        const pay = parseFloat(rentedCar.pay || carDetails.pay);
        const daysRenting = parseInt(rentedCar.daysRenting);
        const carsCount = parseInt(rentedCar.carsCount);

        const total = pay * daysRenting * carsCount || 0;

        setRentedCar(prevState => ({ ...prevState, total }));

    },[rentedCar.pay, rentedCar.daysRenting, rentedCar.carsCount]);
    const handleRentCar=async(e)=>
    {
        try{
        const dataTosend={...rentedCar,
            image:carDetails.image,
            name:carDetails.name,
            seat:carDetails.seat,
            year:carDetails.year,
            fuel:carDetails.fuel,
            doors:carDetails.doors,
            persons:carDetails.persons,
            kms:carDetails.kms,
            pay:carDetails.pay,
        };
        // console.log(dataTosend);
        await axios.post('https://car-rental-website-oy1l.onrender.com/rent',dataTosend);
        toast.success("rented successfully");
        navigate("/profile");
    }
    catch(err)
    {
        console.log(err);
        toast.error("error");
    }
    }
    return (
        <div> 
            <button onClick={handleBack} className='m-3 flex p-2 hover:bg-gray-400 hover:rounded-xl hover:p-2'><ArrowBackIcon/></button>

            <form className=" min-h-[100vh] flex justify-center items-center">
                <fieldset className="border border-black p-12 rounded-xl ">
                <h1 className="text-center font-bold text-xl underline">Car Details</h1>
                <br/>
                    <div className="flex justify-around">
                        <img src={carDetails.image} className="w-[25%] rounded-full"/>
                        <div className="grid grid-cols-3 gap-x-3 text-center">
                            <p>{carDetails.name}</p>
                            <p>{carDetails.cartype}</p>
                            <p>{carDetails.review}</p>
                            <p>{carDetails.seat} seat</p>
                            <p>{carDetails.year}</p>
                            <p>{carDetails.fuel}</p>
                            <p>{carDetails.doors}</p>
                            <p>{carDetails.persons}</p>
                            <p>{carDetails.kms}</p>
                        </div>
                    </div>
                    <br/>
                    <hr className="border border-dotted border-t-1 border-black"/>
                    <br/>



                    <div className="grid grid-cols-2 gap-5">
                        <label htmlFor="noOfDaysRenting"  className="flex flex-col">Days Renting:
                    <input required type="number" id="noOfDaysRenting" name="noOfDaysRenting" placeholder="1 Day('s) Renting" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'daysRenting')} value={rentedCar.daysRenting} />
                    </label>

                    <label htmlFor="noOfDaysCarsRenting"  className="flex flex-col">Cars:
                    <input required type="number" id="noOfDaysCarsRenting" name="noOfCarsRenting" placeholder="1 Car('s)" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'carsCount')} value={rentedCar.carsCount} />
                    </label>

                    <label htmlFor="checkInDate"   className="flex flex-col">Check-In-Date:
                    <input required type="date" id="checkInDate" name="checkInDate" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'checkInDate')} value={rentedCar.checkInDate} />
                    </label>

                    <label htmlFor="checkOutDate"  className="flex flex-col">Check-Out-Date:
                    <input required type="date" id="checkOutDate" name="checkOutDate" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'checkOutDate')} value={rentedCar.checkOutDate} />
                    </label>

                    <label htmlFor="checkInTime"  className="flex flex-col">Check-In-Time:
                    <input required type="time" id="checkInTime" name="checkInTime" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'checkInTime')} value={rentedCar.checkInTime} />
                    </label>

                    <label htmlFor="checkOutTime"  className="flex flex-col">Check-Out-Time:
                    <input required type="time" id="checkOutTime" name="checkOutTime" className="border border-black rounded-md p-2" onChange={(e) => handleChange(e, 'checkOutTime')} value={rentedCar.checkOutTime} />
                    </label>
                    </div>
                    <br/>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-semibold">Total : ${rentedCar.total}</p>
                        <br/>
                    <button className="text-center border border-black rounded-xl px-12 py-2 hover:bg-blue-800 hover:text-white" onClick={handleRentCar}>Rent</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Renting;
