const NavBar=()=>
{
    return (
        <>
            <div className="flex justify-around">
                <div>
                    <h2 className="mx-2 my-10 px-3 py-2">Your Chariot</h2>
                </div>

                <div>
                    <ul className="flex">
                        <li className="mx-2 my-10 px-3 py-2 font-semibold text-md ">Home</li>
                        <li className="mx-2 my-10 px-3 py-2 font-semibold text-md ">Rent Car</li>
                        <li className="mx-2 my-10 px-3 py-2 font-semibold text-md ">Business Consulting</li>
                        <li className="mx-2 my-10 px-3 py-2 font-semibold text-md ">About Us</li>
                        <li className="mx-2 my-10 px-3 py-2 font-semibold text-md ">Blog</li>
                    </ul>
                </div>

                <div>
                    <ul className="flex">
                        <a className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl">Login</li></a>
                        <a className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl">SignUp</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavBar