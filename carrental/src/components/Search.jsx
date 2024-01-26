const Search=()=>
{
    return (
        <>
        <div className="flex justify-center">
                <div className="border border-black rounded-xl p-14 w-[75%] flex justify-center">
                <form className="flex">
                        <label for="pick_up_location" className="mx-2 flex flex-col justify-center items-center font-bold">Pick up Location
                            <input type="text" className=" text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="Gulan,Avenu" id="pick_up_location"/>
                        </label>
                        <label for="return_location" className="mx-2 flex flex-col justify-center items-center font-bold">Return Location
                            <input type="text" className="mx-2 text-center border border-gray-300 font-normal rounded-md p-1 mt-5" placeholder="Gulan,Avenu" id="return_location"/>
                        </label>
                        <label for="pick_up_date" className="font-bold mx-2 flex flex-col justify-center items-center">Pick up Date
                            <input type="type" placeholder="01-06-2023" className="mx-2 text-center border rounded-md p-1 mt-5 font-medium"  id="pick_up_date"/>
                        </label>
                        <label for="return_date" className="mx-2 flex flex-col justify-center items-center font-bold">Return Date
                            <input type="text" className="mx-2 text-center border border-gray-300 font-normal mt-5 rounded-md p-1" placeholder="01-06-2023" id="return_date"/>
                        </label>
                        <label for="submit" className="mx-2 flex justify-center items-center">
                            <input type="submit" value="Search Car" className="mx-2 text-center text-white bg-blue-800 border border-gray-300 rounded-xl px-8 py-2 font-normal" id="submit"/>
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Search