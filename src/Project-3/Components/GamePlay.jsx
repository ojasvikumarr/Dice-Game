import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
export default function GamePlay() {
const[score , setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState("");
  const [showRules , setShowRules] = useState(false);

  const generateRandomNumber = (min , max) => {
    console.log(Math.ceil(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min) ;
}

const rollDice = () => {
    if(!selectedNumber){
        setError("You have not selected any number")
        return ;
    }

    const randomNumber = generateRandomNumber(1 , 7);

    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
        setScore((prev) => prev+randomNumber);
    }else{
        setScore((prev) => prev - 2) ;
    }
    setSelectedNumber(undefined);
}
  
    const resetScore = () => {
        setScore(0);
    }

  return (
    <>
      <MainContainer>
        <div className="top-section">
          <TotalScore score={score}/>
          <NumberSelector
          error={error}
          setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RollDice
         currentDice={currentDice}
         rollDice={rollDice} />
         <div className="btns">
            <OutlinedBtn onClick={resetScore}>Reset</OutlinedBtn>
            <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} rules </Button>
         </div>
         {showRules && <Rules/>}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  padding-top: 30px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    gap: 10px ;
    align-items : center ;
    margin-top : 10px ;
  }
`;
const Button = styled.button`
    display : flex ;
    flex-direction :column ;
    justify-content : center ;
    align-items : center ;
    padding : 10px 10px ;
    gap : 10px ;
    width : 220px ;
    height : 44px ;
    background : #000000 ;
    border-radius : 5px ;
    color : white ; 
    font-size : 16px ;
    border : 1px solid transparent ;
    cursor : pointer ;
    transition : 0.4s background ease-out ;
    &: hover{
        background-color : white ;
        border : 1px solid black ;
        color : black;
        transition : 0.3s background ease-in ;
    }
`

const OutlinedBtn = styled(Button)`
background-color : white ;
border : 1px solid black ;
color : black ;
&: hover{
    background-color : black ;
    border : 1px solid transparent ;
    color : white;
}
`;