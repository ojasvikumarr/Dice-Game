import styled from "styled-components"
import { useState } from "react";
export default function RollDice ({currentDice , rollDice}){

    
    return (
        <>
            <DiceContainer>
                <div className="Dice"
                    onClick={() => rollDice()}>
                <img src={`../Public/dice_${currentDice}.png`} alt="dice-image" />
                </div>
                <p>Click on Dice to Roll</p>
            </DiceContainer>
        </>
    )
}

const DiceContainer = styled.div`
    margin-top : 48px ;
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    .Dice{
        cursor : pointer ;
    }
    p{

    }
`
