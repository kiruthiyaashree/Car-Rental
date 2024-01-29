import '../App.css'
const Footer=()=>
{
    return (
        <>
            <div className=" bg-slate-300">
            <div className="flex justify-evenly p-10">
                    <div className="p-3">
                        <h2>YOUR CHARIOT</h2>
                        <p>Discover Excellence in car rentals</p>
                        <br/>
                        <p>we stand as  your trusted partner. Our dedication to quality, innovation,
                        <br/> and customer satisfaction sets us apart</p>
                    </div>
                    <div className="p-3">
                        <h2>Pages</h2>
                        <ul>
                            <li className="py-1">About</li>
                            <li className="py-1">Pricing</li>
                            <li className="py-1">Car</li>
                            <li className="py-1">Blog</li>

                        </ul>
                    </div>
                    <div className="p-3">
                        <h2>Company</h2>
                        <ul >
                            <li className="py-1">Careers</li>
                            <li className="py-1">News</li>
                            <li className="py-1">Author</li>
                            <li className="py-1">Product Page</li>
                            <li className="py-1">Contact</li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <ul>
                            <li className="py-1">Any questions?</li>
                            <li className="py-1">yourchariot@gmail.com</li>
                            <li className="py-1">Feel free! Ask us anything related to our service</li>

                        </ul>
                    </div>

                </div>
            <div className="flex justify-around ">
                <p>2023 Powered by Your CHARIOT, developed by kiruthiyaashree</p>
                    <ul className="flex gap-x-6">
                        <li>Privacy Policy</li>
                        <li>Website Terms</li>
                        <li>Cookie Policy</li>
                    </ul>
            </div>
            <br/>
            <br/>
            </div>
        </>
    )
}
export default Footer