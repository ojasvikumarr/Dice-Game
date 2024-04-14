import Button from '@mui/material/Button';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CallIcon from '@mui/icons-material/Call';
import TextField from '@mui/material/TextField';
import styles from './Hero.module.css';
import "./Hero.css";
import { styled } from '@mui/material/styles';
const ViaButton = styled(Button)({
    width: '100%',
    backgroundColor: "white",

})
export default function Hero(){
    return (
        <div className="p-8">
            <div className="content">
                <h1 className="font-extrabold text-7xl">Contact us</h1>
                <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa maxime fuga at ut accusamus aperiam deleniti cupiditate porro quasi dolore doloribus nam ex aspernatur, cum quae, provident quas. Deserunt?</p>
            </div>
            <div className="">
                <div className="form">
                    <form action="submit">
                        <div className="support">
                            <div className="">
                                <Button style={{backgroundColor:'black'}} variant="contained" color="error"><TextsmsIcon/>Via support chat</Button>
                            </div>
                            <div className="call">
                                <Button style={{backgroundColor:'black' , widht : '100%'}} variant="contained" color="error"><CallIcon/>via call</Button>
                            </div>
                        </div>
                        <div className="support email">
                                <ViaButton variant="contained"><TextsmsIcon/>Via support chat</ViaButton>
                            <Button style={{backgroundColor:'white', color:'black'}} variant="contained" color="error"><TextsmsIcon/>Via Email Form</Button>
                        </div>
                        <div className="fields">
                        <TextField style={{color:'black'}} id="outlined-basic" label="NAME" variant="outlined" />
                        <TextField style={{color:'black'}} id="outlined-basic" label="E_MAIL" variant="outlined" />
                        <TextField style={{color:'black'}} id="outlined-basic" label="TEXT" variant="outlined" />
                        </div>
                        <Button style={{backgroundColor:'black'}} variant="contained" color="error">Submit</Button>
                    </form>
                </div>
                <div className="image">
                    <img src="/Public/Service 24_7-pana 1-2.svg" alt="" />
                
                </div>
            </div>
        </div>
    )
}