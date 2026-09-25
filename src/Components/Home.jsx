import{Link} from "react-router-dom";
import { GiMountainRoad } from "react-icons/gi";



import "../Home.css"

function Home(){
    return(
        <>
    <div className="home-container">
        
         
        <div className="navbar">
        <Link to="/" className="nav">Home</Link>
        <Link to="/about" className="nav">About</Link>
        <Link to="/destination" className="nav">Destination</Link>
        <Link to="/contact" className="nav">Contact</Link>
        </div>
        
        <div className="hero">
        <Link to="/"><GiMountainRoad id="moun-icon" size={40} color="black"/></Link>
        <h1>TrekKarnataka</h1>
        <p>Explore. Trek. Experience.</p>  
        </div>
 

        <div>
            <p id="para">Explore the <span>beauty of Karnataka</span> through exciting treks, scenic hills, lush forest and unforgettable adventures.
            Your journey into Karnataka's beautiful landscapes begins here.
            Explore, trek and create memories.</p>
        </div>

        <div className="button">
           <Link to="/destination" className="explore">Explore Destination</Link>
        </div>
    </div>
          
        </>

    )
}
export default Home;