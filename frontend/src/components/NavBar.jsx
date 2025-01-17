import logo from "../assets/shine.png"
function NavBar()
{
    return(
        <div className="flex items-center justify-between">
            <img className="w-32 h-auto"src={logo} alt="logo"/>
            <ul className="flex space-x-6 text-brown-500">

               <li>Home</li>
               <li>Portfolio</li>
               <li>services</li>
               <li>Booking</li>
               <li>Contact</li>
               <li>About</li>

            </ul>



        </div>
    )
}

export default NavBar