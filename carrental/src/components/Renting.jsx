import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Renting = () => {
    const [selectedCar, setSelectedCar] = useState({
        username:'',
        name: '',
        seat: '',
        year: '',
        fuel: '',
        doors: '',
        persons: '',
        kms: '',
        pay: '',
    });
    const [carDetailsList, setCarDetailsList] = useState([]);

    useEffect(() => {        

        const carDetailsList = JSON.parse(localStorage.getItem('defaultCarDetails')) || [];
        setCarDetailsList(carDetailsList);
        localStorage.removeItem('RentedCarAndUserDetails');
    }, []);

    const handleCarChange = (e, property) => {
        setSelectedCar({ ...selectedCar, [property]: e.target.value });
    };

    const handleFinalRent = async (e) => {
        e.preventDefault();
        try {
            const userName = localStorage.getItem('userName').replace(/"/g,'');
            console.log(userName);
            const dataToSend={...selectedCar,username:userName};
            await axios.post('http://localhost:5000/rent', dataToSend);
            localStorage.setItem('RentedCarAndUserDetails',JSON.stringify(dataToSend));
            toast.success('Car rented successfully');
        } catch (err) {
            console.error(err);
            toast.error('Error renting car');
        }
    };

    return (
        <div>
            <form className="min-h-[100vh] flex justify-center items-center">
                <fieldset className="px-24 py-12 border border-black p-12 rounded-xl flex flex-col gap-5">
                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'name')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.name}>{car.name}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'seat')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.seat}>{car.seat}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'year')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.year}>{car.year}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'fuel')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.fuel}>{car.fuel}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'doors')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.doors}>{car.doors}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'persons')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.persons}>{car.persons}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'kms')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.kms}>{car.kms}</option>
                        ))}
                    </select>

                    <select className="border border-black px-8 py-2 rounded-xl" onChange={(e) => handleCarChange(e, 'pay')}>
                        {carDetailsList.map((car, i) => (
                            <option key={i} value={car.pay}>{car.pay}</option>
                        ))}
                    </select>
                    <div className="text-center">
                        <button onClick={handleFinalRent} className="w-min px-6 py-1 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Rent</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Renting;
