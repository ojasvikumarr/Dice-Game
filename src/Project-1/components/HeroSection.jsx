import "./HeroSection.css"
import Button from '@mui/material/Button';

export default function HeroFunction(){
    return (
        <>
        <main className="hero">
            <div className="hero-content p-5 mt-7">
                <h1 className="font-extrabold text-7xl">YOUR FEET DESERVE THE BEST</h1>
                <p className="text-xl mt-4">YOUR FEET Looks delicious YOUR FEET Looks delicious YOUR FEET Looks delicious YOUR FEET Looks delicious</p>

                <div className="hero-btn mt-3">
                    <Button variant="contained" color="error">Shop now</Button>&nbsp;&nbsp;
                    <Button variant="outlined" color="error">Category</Button>
                </div>
                <div className="shopping m-2">
                    <p>Available on </p>
                    <div className="icons m-1 flex">
                        <img className="" src="/src/Project-1/public/images/amazon.png" alt="" />
                        <img src="/src/Project-1/public/images/flipkart.png" alt="" />
                        
                    </div>
                </div>
            </div>
            <div className="hero-image m-9 text-3xl">
                <img src="/src/Project-1/public/images/shoe_image.png" alt="" />
            </div>
        </main>
        </>
    )
}