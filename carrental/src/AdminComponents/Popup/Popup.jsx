import React, { useState } from "react";
import "./Popup.css";

export const Popup = ({ closePopup, car }) => {
  const [formData, setFormData] = useState({
    name:car.name,
    image:car.image,
    seat:car.seat,
    year:car.year,
    fuel:car.fuel,
    doors:car.doors,
    persons:car.persons,
    kms:car.kms,
    pay:car.pay,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sends details to the index.jsx file to be updated
    closePopup();
  };

  return (
    <div className="popup-container">
      <div className="popup-body ">
        <div className="flex justify-end p-4">
            <button className="close-btn" onClick={closePopup}>
            &times;
            </button>
        </div>
        <h2 className="text-center font-bold text-xl">Update</h2>
        <br/>

        <form onSubmit={handleSubmit} className="px-12">
            
          <div className="grid grid-cols-3 gap-10">
          {/* Example form fields */}
          <label htmlFor="name">Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            placeholder={car.name}
          />
          </label>
          <label htmlFor="name">Image : &nbsp; 
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image || ""}
            onChange={handleChange}
            placeholder={car.image}
          />
          </label>

          <label htmlFor="name">Seats : &nbsp;
          <input
            type="number"
            name="seat"
            value={formData.seat || ""}
            onChange={handleChange}
            placeholder={car.seat}
          />
          </label>

          <label htmlFor="name">Year : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            name="year"
            value={formData.year || ""}
            onChange={handleChange}
            placeholder={car.year}
          />
          </label>

          <label htmlFor="name">Fuel : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="fuel"
            value={formData.fuel || ""}
            onChange={handleChange}
            placeholder={car.fuel}
          />
          </label>

          <label htmlFor="name">Doors : &nbsp;
          <input
            type="text"
            name="doors"
            value={formData.doors || ""}
            onChange={handleChange}
            placeholder={car.doors}
          />
          </label>

          <label htmlFor="name">Persons : &nbsp;
          <input
            type="text"
            name="persons"
            value={formData.persons || ""}
            onChange={handleChange}
            placeholder={car.persons}
          />
          </label>

          <label htmlFor="name">kms : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="kms"
            value={formData.kms || ""}
            onChange={handleChange}
            placeholder={car.kms}
          />
          </label>

          <label htmlFor="name">Pay : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            name="pay"
            value={formData.pay || ""}
            onChange={handleChange}
            placeholder={car.pay}
          />
          </label>
          </div>
          {/* Add more fields as needed */}
          <br/>
          <br/>
          <br/>

          <div className="flex justify-center">
          <button type="submit" className="px-8 py-2 border border-black rounded-xl bg-blue-800 text-white hover:border-b-2 hover:border-r-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
