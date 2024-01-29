import Car from '../images/contact_image.png'
const Contact=()=>
{
    return (
        <>
            <div className="flex justify-center bg-blue-800 rounded-lg shadow-2xl mx-52">
                <div className="pb-20 pt-10">
                    <h1 className='text-3xl text-white'>
                        Ready To Get Started?
                    </h1>
                    <p className=' text-white py-3'>
                        We stand as your trusted partner, our dedication to quality, innovation, and customer satisfaction sets us apart
                    </p>
                    <br/>
                    <button className="rounded-xl hover:bg-white hover:text-inherit cursor-pointer border px-10 py-2 text-white">Contact Us</button>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>

            <img src={Car} alt="reload car image" className="p-20  absolute"/>
            </div>
        </>
    )
}
export default Contact