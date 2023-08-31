import Logo from "./1.png"

export default function Nav() {
    return (
        <nav className="nav">
            <img className="logo" src={Logo}/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Buy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}