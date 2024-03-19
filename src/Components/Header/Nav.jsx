import Navbar from "./Navbar";

const Nav = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "NotFound", path: "/404" }
      ];
      
      

    return (
        <nav>
            <div className="">
                <ul className="md:flex gap-10">
                {
                    routes.map(route => <Navbar key={route.id} list={route}></Navbar>)
                }
                </ul>
            </div>
        </nav>
    );
};

export default Nav;