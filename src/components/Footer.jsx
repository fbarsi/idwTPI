import "../css/Footer.css"

const Footer = () => {
    return(
        <>
        <div className="footer">
        <section className="footer-container">
            <div className="logo-container">
                <img className="footer-logo" src="/img/logo.png" alt="a" />
                <p>Stay, relax, enjoy.</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Newsroom</a></li>
                </ul>
                <ul>
                    <li><a href="#">Amenities</a></li>
                    <li><a href="#">Free Wi-Fi</a></li>
                    <li><a href="#">Spa & Pool</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
                <ul>
                    <li><a href="#">Social</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Threads</a></li>
                </ul>
            </div>
        </section>

        <section className="footer-copyright">
            <small>&copy; 2024 Tech-in</small>
            <div className="footer-flex">
                <p>Policies</p>
                <p>Cookies</p>
            </div>
        </section>
        </div>
        </>
    );
}

export default Footer;