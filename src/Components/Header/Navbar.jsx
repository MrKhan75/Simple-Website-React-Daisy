import PropTypes from 'prop-types';

const Navbar = ({list}) => {
    const {name, path} = list;
    return (
        <div>
            <nav>
                <div className="">
                    <ul className="md:flex gap-10">
                        <li className='hover:bg-pink-400 hover:text-white p-1 hover:duration-300 hover:rounded-md hover:p-1'><a className="uppercase" href={path}>{name}</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    list: PropTypes.object
}
export default Navbar;