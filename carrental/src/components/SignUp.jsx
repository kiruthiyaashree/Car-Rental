const SignUp=()=>
{
    return (
        <>
            <div className="">
                <form className="flex justify-center items-center min-h-[100vh]">
                    <fieldset className="border border-black w-fit p-32 rounded-xl">
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="username" id="username" name="username"/>
                    <br/>
                    <input type="text" className="border border-black p-3 rounded-md my-3" placeholder="email"id="email" name="email" />
                    <br/>
                    <input type="password" className="border border-black p-3 rounded-md my-3" placeholder="password" id="password" name="password"/>
                    <br/>
                    <input type="password" className="border border-black p-3 rounded-md my-3" placeholder="confirm_passsword" id="confirm_password" name="comfirm_password"/>
                    <br/>
                    <div className="flex justify-center my-3">
                    <button className="px-8 py-2 border border-black rounded-xl bg-black text-white">Signup</button>
                    </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
export default SignUp