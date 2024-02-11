import CarList from "./CarList"
import Navbar from "./Navbar"
import contactImage from '../images/contact_image.png'
const Home=()=>
{
    return (
        <>
            <div className="text-center p-5">
                <Navbar/>
                <br/>
                <br/>
                <br/>
                <div className="bg-blue-800/40 rounded-xl p-2  pb-40">
                <h1 className="z-1 mt-12 text-3xl">welcome Admin!</h1>
                <span className="flex justify-center p-1">
                <hr className="w-[20%] border border-black"/>
                </span>
                <p className="pt-2">The administrative function is the backbone of any organization, ensuring smooth operations and customer satisfaction.</p>
                <div className="flex justify-center">
                <img src={contactImage} className="z-0 w-[20%] absolute top-[18rem]"/>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <CarList/>
        </>
    )
}
export default Home