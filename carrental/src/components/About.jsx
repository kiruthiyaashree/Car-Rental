import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
const About=()=>
{
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-extrabold text-5xl">Why <span className="text-blue-800">Choose</span> Us</h1>
                <br/>
                <p className="font-semibold">We Stand As Your Trusted Partner. Our Dedication To Quality, Innovation, And Customer Satisfaction Sets Us Apart</p>
            </div>


            <br/>
            <br/>
            <br/>


            <div className='grid grid-cols-2 mx-60 gap-y-6 gap-x-10 text-justify'>
                <div className='flex'>
                    <LocalPhoneIcon/>
                    <span className='px-2'>
                    <h2 className='text-xl font-extrabold'>24 Hours Support</h2>
                    <p className='py-4 font-semibold'>We stand as your trusted partner. Out dedication to quality, innovation, and customer satisfaction sets us apart</p>
                    </span>
                </div>
                <div className='flex'>
                    <MonetizationOnIcon/>
                    <span className='px-2'>
                    <h2 className='text-xl font-extrabold'>24 Hours Support</h2>
                    <p className='py-4 font-semibold'>We stand as your trusted partner. Out dedication to quality, innovation, and customer satisfaction sets us apart</p>
                    </span>
                </div>
                <div className='flex'>
                    <VerifiedIcon/>
                    <span className='px-2'>
                    <h2 className='text-xl font-extrabold'>24 Hours Support</h2>
                    <p className='py-4 font-semibold'>We stand as your trusted partner. Out dedication to quality, innovation, and customer satisfaction sets us apart</p>
                    </span>
                </div>
                <div className='flex'>
                    <CancelIcon/>
                    <span className='px-2'>
                    <h2 className='text-xl font-extrabold'>24 Hours Support</h2>
                    <p className='py-4 font-semibold'>We stand as your trusted partner. Out dedication to quality, innovation, and customer satisfaction sets us apart</p>
                    </span>
                </div>
            </div>
        </>
    )
}
export default About