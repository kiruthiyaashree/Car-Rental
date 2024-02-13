import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Popup } from "./Popup/Popup";
import { toast } from "react-toastify";
import PopupForNew from "./Popup/PopupforNew";

const CarList = () => {
  const [carDetails, setCarDetails] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpenForAdd, setIsPopupOpenforAdd] = useState(false);
  const [selectedCar,setSelectedCar] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleFetchCarDetails = async () => {
      const response = await axios.get("http://localhost:5000/car-details");
      setCarDetails(response.data);
    };
    handleFetchCarDetails();
  }, []);

  const handleUpdate = (e,car) => {
    // console.log("clicked");
    e.preventDefault();
    setSelectedCar(car);
    setIsPopupOpen(true); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsPopupOpenforAdd(false);
  };

  const handleAddNewCar=()=>
  {
    setIsPopupOpenforAdd(true);
  }
  const handleDeleteCar=async(e,car)=>
  {
        e.preventDefault();
        try{
          // console.log(car._id);
            const response = await axios.post("http://localhost:5000/delete-car",car);
            // localStorage.setItem('defaultCarDetails',JSON.stringify(response.data));
            toast.success("Deleted succcessfully");
            navigate('/adminhome');
        }
        catch(error)
        {
            console.log(error);
            toast.error("Error on deleting the car");
        }
  }
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">Carlist</h1>
        <span className="flex justify-center p-4">
          <hr className="w-[30%] border border-black" />
        </span>

        <br />
        <div className="flex justify-center items-center">
          <button className="rounded-md px-8 py-2 bg-green-300/100 flex items-center" onClick={handleAddNewCar}>
            <AddIcon />
            Add
          </button>
        </div>
        <br />

        <div className="flex flex-col items-center px-32 gap-y-5">
          {carDetails.map((car, index) => {
            return (
              <div
                key={index}
                className=" border border-black w-[70rem] rounded-md grid grid-cols-3"
              >
                <div className="flex justify-center">
                  <img
                    src={car.image}
                    className="h-[8rem] p-3"
                    alt="reloading page"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between gap-10  py-1">
                    <p>{car.name}</p>
                    <p>{car.cartype}</p>
                    <p>{car.review}</p>
                  </div>

                  <div className="flex justify-between gap-10 py-1">
                    <p>{car.seat} seat</p>
                    <p>{car.year}</p>
                    <p>{car.fuel}</p>
                  </div>

                  <div className="flex justify-between gap-10 py-1">
                    <p>{car.doors}</p>
                    <p>{car.persons}</p>
                    <p> {car.kms}</p>
                  </div>
                </div>

                {/* button section begins */}
                <div className="flex  justify-evenly">
                  <div className="flex justify-center items-center">
                    <button type="submit"
                      onClick={(e)=>handleUpdate(e,car)} 
                      className="rounded-md px-8 py-2 bg-yellow-200/100 flex items-center"
                    >
                      <EditIcon />
                      Update
                    </button>
                  </div>

                  <div className="flex justify-center items-center">
                    <button type="submit" className="rounded-md px-8 py-2 bg-red-300/100 flex items-center" onClick={(e)=>handleDeleteCar(e,car)}>
                      <DeleteOutlineIcon />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isPopupOpen && <Popup closePopup={handleClosePopup} car={selectedCar}/>}
      {isPopupOpenForAdd && <PopupForNew closePop={handleClosePopup}/>}
    </>
  );
};
export default CarList;
