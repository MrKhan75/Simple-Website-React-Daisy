import { useState } from "react";
import Navbar from "./Navbar";
import { CiMenuBurger} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Nav = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "NotFound", path: "/404" }
      ];
      
      

    return (
        <nav>
            <div className="md:hidden text-xl p-3" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose ></IoMdClose> : <CiMenuBurger></CiMenuBurger>
                }
                
                
            </div>

            <div className="md:flex justify-center p-5">
                <ul className={`md:flex gap-10 absolute md:static px-4 duration-1000  ${open ? 'top-16' : '-top-40'}`}>
                {
                    
                    routes.map(route => <Navbar key={route.id} list={route}></Navbar>)
                }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;