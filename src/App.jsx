import './App.css';
import Nav from './Components/Header/Nav';
import Hero from './Components/Header/Hero';

function App() {
  

  return (
    <>
      <div className="mainContainer">
          {/* Responsive Navbar */}
         <div className='bg-base-200'>
            <Nav></Nav>
            <Hero></Hero>
          </div> 
          
      </div>
    </>
  )
}

export default App
