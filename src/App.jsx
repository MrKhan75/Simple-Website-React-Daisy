import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Header/Hero';
import Price from './Components/Main/PriceOption/Price';
import Chart from './Components/Main/Chart/Chart';

function App() {
  

  return (
    <>
      <div className="mainContainer">
          {/* Responsive Navbar */}
         <div className='bg-base-200'>
            <Nav></Nav>
            <Hero></Hero>
          </div> 
          <div>
              <Price></Price>
          </div>
          <Chart></Chart>
      </div>
    </>
  )
}

export default App
