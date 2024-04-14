import "./Navbar.css"
export default function Navbar(){
    return (
        <>
        <div>
            <nav>
                <div className="logo">
                    <img src="/src/Project-1/public/images/brand_logo.png" alt="logo" />
                </div>
                <ul className="flex">
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contacts</li>
                </ul>
                <button className="login">Login</button>
            </nav>
        </div>
        </>
    )
}