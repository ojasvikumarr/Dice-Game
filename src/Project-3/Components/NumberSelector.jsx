import styled from "styled-components"
import {useState} from "react"
export default function NumberSelector ({error ,setError, selectedNumber , setSelectedNumber}){
    const arrayNumber = [1,2,3,4,5,6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }
    console.log(selectedNumber);
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
            {
                arrayNumber.map((value , i) => {
                    return <Box
                    isSelected ={value === selectedNumber}
                    key={i} onClick ={() => numberSelectorHandler(value)}>{value}</Box>
                })
            }
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
        
        
    )
}

const Box = styled.div`
    height : 72px ;
    width : 72px ;
    border : 1px solid black ;
    display : grid ;
    place-items : center ;
    font-size : 24px ;
    font-weight : 700 ;
    transiton : 0.3s background ease-out ;
    background-color :${(props) => props.isSelected ? "black" : "white"};
    color :${(props) => !props.isSelected ? "black" : "white"};
    transition :${(props) => !props.isSelected ? "0.3s background ease-in" : "0.3s background ease-out"};
`

const NumberSelectorContainer = styled.div`
    display : flex ;
    flex-direction : column ;    
    align-item : end ;

    .flex{
        display : flex ;
        gap : 24px ;
    }
    p{
        font-size : 24px ;
        font-weight : 700px ;
    }
    .error{
        color : red ;
    }
`