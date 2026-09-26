import "../About.css"


function About(){
    return(
        <>
        <div className="about-container">
        <h1 className="about-us">About Us</h1>

        <div className="about-content">
        <p className="par">Welcome to TrekKarnataka, a trekking and adventure platform created for people who love nature, travel and adventure.</p>
        <p className="par">We help you discoverd beautiful trekking destination, explore different trails and choose treks based on your experience and interests. Whether you are a beginner or an an experienced trekker, you can find an adventure that suits you </p>
        </div>

        <h3 className="h3">Our Mission</h3>
        <p className="par">Our mission is to make trekking simple, enjoyable and accessible for everyone while encouraging people to explore nature responsibly</p>
        
        <h3 className="h3">Why Choose Us?</h3>
        <ul id="un-list">
            <li>Beautiful trekking destinations</li>
            <li>Treks for beginners and experienced trekkers</li>
            <li>Affordable trekking packages</li>
            <li>Flexible trekking schedules</li>
            <li>Amazing trekking experience</li>
            <li>Focus on Safty and responsible travel</li>
        </ul>

        <h3 className="h3">Start Your Adventure </h3>
        <p id="start-ur-adv">Explore new placed. Chanllenge yourself. Create Unforgettable memories</p>

        <div className="par" id="end">TrekKarnataka - Explore. Trek. Experince</div>
      

        </div>
        </>

    )
}
export default About;