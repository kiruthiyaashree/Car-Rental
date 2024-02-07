import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
const FilterList = () => {
    const [carDetails, setCarDetails] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            try {
                const d = JSON.parse(localStorage.getItem('defaultCarDetails'));
                const f_values = JSON.parse(localStorage.getItem('FilteredValues'));
                console.log(f_values);
    
                if (f_values && f_values.responseResults && f_values.responseResults.length > 0) {
                    setCarDetails(f_values.responseResults);
                } else {
                    setCarDetails(d);
                }
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };
        
        // Listen for storage event
        window.addEventListener('storage', handleStorageChange);
    
        // Cleanup function
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []); // Empty dependencies array for mounting effect
    
    return (
        <div>
            <br/>
            <br/>
            <br/>

        <div className="flex flex-col justify-center">
            <Search/>
            <br/>
            <br/>
            <br/>

            <h2 className='text-center text-2xl font-bold'>Car Details</h2>
            <br/>
            <br/>
            <br/>
        
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
                            <p>{car.review}</p>
                            </div>

                            <div className="flex justify-between py-1">
                                <p>{car.seat}</p>
                                <p>{car.year}</p>
                                <p>{car.fuel}</p>
                            </div>

                            <div className="flex justify-between py-1">
                                <p>{car.doors} Door</p>
                                <p>{car.persons} Person</p>
                                <p>{car.kms}</p>
                            </div>
                            <br/>
                            <hr className='border border-t-2 border-gray-400 border-dotted'/>
                            <br/>
                            <div className='flex justify-around items-center'>
                                <p>{car.pay}</p>
                                <button className="border px-6 py-2 rounded-md border-blue-800 text-blue-800">Rent Car</button>
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
