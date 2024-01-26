import StarIcon from '@mui/icons-material/Star';
const List=()=>
{
    const car_details=[
        {
            id:1,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35XyV4sRJ8Ieu7i82e6qKoPRh9lirsxKi8fBdM4UgaA&s",
            car_name : "Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:2,
            image:"https://imgd.aeplcdn.com/370x208/n/cw/ec/139177/3-series-gran-limousine-exterior-right-front-three-quarter-3.jpeg?isig=0",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:3,
            image:"https://media.zigcdn.com/media/model/2023/Feb/swift_360x240.jpg",
            car_name:"Maruti Suzuki",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:4,
            image:"https://imgd.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:5,
            image:"https://www.mahindra.co.nz/wp-content/uploads/2023/03/card-SCORPIO-N-1.png",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:6,
            image:"https://imgd.aeplcdn.com/1056x594//n/xiuns3a_1588137.jpg?q=80",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:7,
            image:"https://static.autox.com/uploads/cars/2023/01/hyundai-grand-i10-nios-facelift3.jpg",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:8,
            image:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my23/eqe-sedan/all-vehicles/2023-EQE350-SEDAN-AVP-DR.png",
            car_name:"Huyndai Tucson Accent",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
        {
            id:9,
            image:"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
            car_name:"Renault Kwid",
            review:"2k reviews",
            seat:"6 Seat",
            year:"2022",
            fuel:"Petrol",
            doors:2,
            persons:5,
            kms:"80 Km",
            pay:"$120 /Day",
        },
    ]
    return (
        <>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold">Latest <span className="text-blue-800">Inventory</span></h1>
                <br/>
                <p className="font-semibold">Experience The Future Of Automotive Innovation With Our Latest Car Models</p>
            </div>
            <br/>
            <br/>
            <br/>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-10 w-[75%]">
                    {
                        car_details.map((details,i)=>
                        (
                            <div key={i} className="border flex justify-center items-center border-gray-400 font-semibold">
                            <div className='p-4 '>
                                <img src={details.image} className='h-[15em]' alt="reloang page"/>
                                <br/>

                                <div className='flex justify-between py-1'>
                                <p>{details.car_name}</p>
                                <p><StarIcon/>{details.review}</p>
                                </div>

                                <div className="flex justify-between py-1">
                                    <p>{details.seat}</p>
                                    <p>{details.year}</p>
                                    <p>{details.fuel}</p>
                                </div>

                                <div className="flex justify-between py-1">
                                    <p>{details.doors} Door</p>
                                    <p>{details.persons} Person</p>
                                    <p>{details.kms}</p>
                                </div>
                                <br/>
                                <hr className='border border-t-2 border-gray-400 border-dotted'/>
                                <br/>
                                <div className='flex justify-around items-center'>
                                    <p>{details.pay}</p>
                                    <button className="border px-6 py-2 rounded-md border-blue-800 text-blue-800">Rent Car</button>
                                </div>
                                </div>
                            </div>
                        ))
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