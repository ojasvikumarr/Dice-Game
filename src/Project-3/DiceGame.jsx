import styled from "styled-components";
import StartGame from "./Components/StartGame";
import {useState} from "react";
import GamePlay from "./Components/GamePlay";
const Button = styled.button`
background-color :black ;
color: white ;
border-radius : 5px ;
padding: 5px 10px 5px 10px ;

`

export default function DiceGame(){
    const [isStarted , setisStarted] = useState(false);

    const toggleGame = () => {
        setisStarted(
            (prev) => !prev 
        )
    }
    return(
        <>
        {isStarted ? <GamePlay/> : <StartGame toggle={toggleGame}/>}
        </>
    )
}
