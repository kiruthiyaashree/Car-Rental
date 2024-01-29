const Search=()=>
{
    return (
        <>
        <div className="flex justify-center">
                <div className="border border-black rounded-xl p-14 w-[75%] flex justify-center">
                <form className="flex">
                        <label for="car_type" className="mx-2 flex flex-col justify-center items-center font-bold">Type
                            <input type="text" className=" text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="SUV" autoComplete="off" id="car_type"/>
                        </label>
                        <label for="year" className="mx-2 flex flex-col justify-center items-center font-bold">Year
                            <input type="text" className="mx-2 text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="2023" autoComplete="off"  id="year"/>
                        </label>
                        <label for="seat" className="font-bold mx-2 flex flex-col justify-center items-center">Seats
                            <input type="number" placeholder="1" className="mx-2 text-center border rounded-md p-1 mt-5 font-medium" autoComplete="off" id="pick_up_date"/>
                        </label>
                        <label for="price" className="mx-2 flex flex-col justify-center items-center font-bold">Price ($)
                            <input type="number" className="mx-2 text-center border border-gray-300 font-normal mt-5 rounded-md p-1" placeholder="120" autoComplete="off" id="price"/>
                        </label>
                        <label for="submit" className="mx-2 flex justify-center items-center">
                            <input type="submit" value="Search Car" className="mx-2 text-center text-white bg-blue-800 border border-gray-300 rounded-xl px-8 py-2 font-normal" autoComplete="off" id="submit"/>
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Search