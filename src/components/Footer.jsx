import "../css/Footer.css"

const Footer = () => {
    return(
        <>
            <section>
                <div>
                    <p>Tech-in</p>
                    <p>Stay, relax, enjoy.</p>
                </div>
                <div>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                    </ul>
                    <ul>
                        <li>Amenities</li>
                        <li>Free Wi-Fi</li>
                        <li>Spa & Pool</li>
                        <li>Events</li>
                    </ul>
                    <ul>
                        <li>Social</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Threads</li>
                    </ul>
                </div>
            </section>

            <hr className=""/>

            <section>
                <small>&copy; 2024 Tech-in</small>
                <div>
                    <h6>Policies</h6>
                    <h6>Cookies</h6>
                </div>
            </section>
        </>
    );
}

export default Footer;