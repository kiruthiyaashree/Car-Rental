import { useState } from 'react';
import './Popup.css';
import AddIcon from "@mui/icons-material/Add";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PopupForNew=({closePop})=>
{
    const [AddNewCar,setAddNewCar] = useState({
        name:'',
        image:'', 
        cartype:'',
        review:'', 
        seat:'',
        year:'',
        fuel:'',
        doors:'',
        persons:'',
        kms:'',
        pay:'',
    })
    const navigate=useNavigate();
    const handleChange=(e)=>
    {
        const {name,value} = e.target;
        setAddNewCar({...AddNewCar,[name]:value});
    };

    const handleSubmit=async(e)=>
    {
        try{
            const response = await axios.post("http://localhost:5000/add-cars",AddNewCar);
            // console.log(response.data);
            navigate('/adminhome');
        }
        catch(error){
            console.log(error);
            toast.error("Error in adding a car");
        }
    }
    return (
        <>
            <div className="popup-container">
                <div className='popup-body'>
                    <div className='flex justify-end p-4'>
                    <button className='close-btn' onClick={closePop}>&times;</button>
                    </div>
                    <div>
                        <form className='p-10 flex flex-col justify-center' onSubmit={handleSubmit}>

                        <div className=' grid grid-cols-3 gap-10'>
                            <label htmlFor='name'>Name :&nbsp;
                                <input autoComplete='off' type='text' id='name'
                                name='name' placeholder='Car name'
                                onChange={handleChange}
                                value={AddNewCar.name}/>
                            </label>

                            <label htmlFor='cartype'>CarType : &nbsp;
                                <input autoComplete='false' type='text' id='cartype'
                                name='cartype' placeholder=' cartype'
                                onChange={handleChange}
                                value={AddNewCar.cartype}/>
                            </label>

                            <label htmlFor='review'>Review : &nbsp;
                                <input autoComplete='false' type='text' id='review'
                                name='review' placeholder=' review'
                                onChange={handleChange}
                                value={AddNewCar.review}/>
                            </label>



                            <label htmlFor='image'>Image :&nbsp;
                                <input autoComplete='false' type='text' id='image'
                                name='image' placeholder='Car image url'
                                onChange={handleChange}
                                value={AddNewCar.image}/>
                            </label>

                            <label htmlFor='seat'>Seats :&nbsp;
                                <input autoComplete='false' type='number' id='seat'
                                name='seat' placeholder='seat'
                                onChange={handleChange}
                                value={AddNewCar.seat}/>
                            </label>

                            <label htmlFor='year'>Year :&nbsp;
                                <input autoComplete='false' type='text' id='year'
                                name='year' placeholder='year'
                                onChange={handleChange}
                                value={AddNewCar.year}/>
                            </label>

                            <label htmlFor='fuel'>fuel :&nbsp;
                                <input autoComplete='false' type='text' id='fuel'
                                name='fuel' placeholder='Car fuel'
                                onChange={handleChange}
                                value={AddNewCar.fuel}/>
                            </label>

                            <label htmlFor='doors'>Doors :&nbsp;
                                <input autoComplete='false' type='text' id='doors'
                                name='doors' placeholder=' Doors'
                                onChange={handleChange}
                                value={AddNewCar.doors}/>
                            </label>

                            <label htmlFor='persons'>Persons :&nbsp;
                                <input autoComplete='false' type='text' id='persons'
                                name='persons' placeholder='persons'
                                onChange={handleChange}
                                value={AddNewCar.persons}/>
                            </label>

                            <label htmlFor='kms'>Kms :&nbsp;
                                <input autoComplete='false' type='text' id='kms'
                                name='kms' placeholder=' kms'
                                onChange={handleChange}
                                value={AddNewCar.kms}/>
                            </label>

                            <label htmlFor='pay'>Pay : &nbsp;
                                <input autoComplete='false' type='text' id='pay'
                                name='pay' placeholder=' pay /Day' 
                                onChange={handleChange}
                                value={AddNewCar.pay}/>
                            </label>
                            </div>

                            <br/>
                            <br/>

                            <div className="flex justify-center">
                                <button type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2"><AddIcon/> Add Car</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
    )
}
export default PopupForNew;