export default function Header()
{
    return (<>
        <div className="flex flex-wrap  justify-between p-2">
            <div className="">
                <img className="w-[15vw] h-[5vw] p-2 " src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/swiggy_logo_bml6he.png"></img>
            </div>
            <div className="flex items-center ">
            <a href="https://www.swiggy.com/corporate/" className="text-center m-4 text-white">swiggy corporate</a>
            <a href="https://partner.swiggy.com/login#/swiggy" className="text-center m-4 text-white">Partner with us</a>
            <a href="https://www.swiggy.com/corporate/" className="text-center m-4 text-white">Get App</a>
            <a href="https://www.swiggy.com/corporate/" className="text-center m-4 text-white">Sign in</a>
            </div>
        </div>
    </>)   
}