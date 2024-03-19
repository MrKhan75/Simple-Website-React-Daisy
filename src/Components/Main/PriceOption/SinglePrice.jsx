import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const SinglePrice = ({option}) => {
    const {name, price , features} = option
    return (
        <div className='bg-blue-300 p-5  space-y-2 rounded-md'>
            <p className='text-3xl font-semibold '>{price} <span className='text-base'>/ per month</span></p>
            <p className='text-lg'>{name}</p>
            <div>
                {features.map(list =>  <li className='text-left text-sm ml-5 py-1 list-none flex  gap-3'><FaRegCheckCircle className='mt-2 text-lg'></FaRegCheckCircle>{list}</li>)}
            </div>
            <div className='pt-5 text-center'>
                <button className='text-lg bg-pink-300  px-5 py-2 rounded-md font-semibold'>Buy Now</button>
            </div>
        </div>
    );
};



SinglePrice.propTypes = {
    option: PropTypes.object
}


export default SinglePrice; 