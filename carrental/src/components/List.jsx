const List=()=>
{
    const car_details=[
        {
            id:1,
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
            id:4,
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
    ]
    return (
        <>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold">Latest <span className="text-blue-800">Inventory</span></h1>
                <br/>
                <p className="font-semibold">Experience The Future Of Automotive Innovation With Our Latest Car Models</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-10 w-[75%]">
                    {
                        car_details.map((details,i)=>
                        (
                            <div key={i} className="border border-gray-400">
                            <div>
                                <p>{details.car_name}</p>
                                <p>{details.review}</p>
                                <p>{details.seat}</p>
                                <p>{details.year}</p>
                                <p>{details.fuel}</p>
                                <p>{details.door}</p>
                                <p>{details.persons}</p>
                                <p>{details.kms}</p>
                                <p>{details.pay}</p>
                                <button className="border border-blue-800 text-blue-800">Rent Car</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default List