import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Header/Hero';
import Price from './Components/Main/PriceOption/Price';

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
          
      </div>
    </>
  )
}

export default App
