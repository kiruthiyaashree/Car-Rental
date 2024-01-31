import {Link} from 'react-router-dom';
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
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Home</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Rent Car</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Business Consulting</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">About Us</li>
                        <li className="mx-2 my-10 px-3 py-2  text-md ">Blog</li>
                    </ul>
                </div>

                <div>
                    <ul className="flex">
                        <Link to='/signin' className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl">Login</li></Link>
                        <Link to='/signup' className="cursor-pointer"><li className="mx-2 my-10 px-3 py-2 border border-black rounded-xl">SignUp</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default NavBar