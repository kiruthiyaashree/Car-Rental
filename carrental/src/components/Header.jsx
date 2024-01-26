import NavBar from "./NavBar"
import Car from '../images/car.png'
const Header=()=>
{
    return (
        <>
            <NavBar/>
            <div className="grid grid-cols-[2fr_3fr]">
                <div className="flex flex-col justify-center items-center ml-8">
                    <h1 className="text-[4rem]">Easy And Fast Way To <span className="text-blue-800">Rent</span> Your Car</h1>
                    <p className="text-xl">We offer a wide range of rental cars to suit your needs. Whether your're planning a weekend getaway, a Business trip</p>
                    <br/>
                    <br/>
                    <button className="px-10 py-2 rounded-xl bg-blue-800 text-white">Rent Car</button>
                </div>
                <img src={Car}/>
            </div>
        </>
    )
}
export default Header