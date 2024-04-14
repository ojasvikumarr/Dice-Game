import "./Navbar.css"
import styles from "./Navbar.module.css";
export default function Navbar(){
    console.log(styles);
    return(
        <div className={`${styles.container} `}>
            <nav>
                <div className="w-10 h-10">
                    <img src="/src/Project-2/Public/ojasvi-high-resolution-logo-transparent (1).png" alt="logo" />
                </div>
                <div className="font-medium ">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    )
}

