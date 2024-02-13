import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Search = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
            cartype: "",
            year: "",
            seat: "",
            pay: ""
        }
    );

    // useEffect(() => {
    //     // Save form data to localStorage whenever it changes
    //     localStorage.setItem("formData", JSON.stringify(formData));
    // }, [formData]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseSearchData = await axios.post("http://localhost:5000/search",formData);
            if (responseSearchData) {
                localStorage.setItem('FilteredValues', JSON.stringify(responseSearchData.data));
                // Trigger a re-render of FilterList component (if it's rendered)
                window.dispatchEvent(new Event('storage')); // Dispatch storage event
            }
            else{
                localStorage.removeItem('FilteredValues');
            }
            const username=localStorage.getItem('userName');
            if(!username)
            {
                navigate("/signin");
            }
            else{
                navigate("/filters");
            }
            setFormData({
                cartype: "",
                year: "",
                seat: "",
                pay: ""
            });
        } catch (error) {
            console.error("error searching form ", error);
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="border border-black rounded-xl p-14 w-[75%] flex justify-center">
                    <form className="flex" onSubmit={handleSubmit}>
                        <label htmlFor="cartype" className="mx-2 flex flex-col justify-center items-center font-bold">Type
                            <input type="text" className=" text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="SUV" onChange={handleChange} value={formData.cartype} autoComplete="off" name="cartype" id="cartype" />
                        </label>
                        <label htmlFor="year" className="mx-2 flex flex-col justify-center items-center font-bold">Year
                            <input type="text" className="mx-2 text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="2023" onChange={handleChange} value={formData.year} autoComplete="off" name="year" id="year" />
                        </label>
                        <label htmlFor="seat" className="font-bold mx-2 flex flex-col justify-center items-center">Seats
                            <input type="number" placeholder="1" className="mx-2 text-center border rounded-md p-1 mt-5 font-medium" autoComplete="off" onChange={handleChange} value={formData.seat} name="seat" id="seat" />
                        </label>
                        <label htmlFor="pay" className="mx-2 flex flex-col justify-center items-center font-bold">Price ($)
                            <input type="number" className="mx-2 text-center border border-gray-300 font-normal mt-5 rounded-md p-1" placeholder="120" autoComplete="off" onChange={handleChange} value={formData.pay} name="pay" id="pay" />
                        </label>
                        <div htmlFor="submit" className="mx-2 flex justify-center items-center">
                            <button type="submit" value="Search Car" className="mx-2 text-center text-white bg-blue-800 border border-gray-300 rounded-xl px-8 py-2 font-normal" autoComplete="off" id="submit">Search Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Search;
