import styled from "styled-components"
export default function Rules() {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number </p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number then the chosen number will be added to the score </p>
                <p>If your get wrong guess then 2 points will be deducted </p>
            </div>
        </RulesContainer>
    )
}
const RulesContainer = styled.div`
background-color : #fbf1f1 ;
padding : 20px ;
h2{
    font-size : 24px ;
}
.text{
    margin-top : 24px ;

}
max-width : 800px ;
margin : 0 auto ;
margin-top : 40px ;
border-radius : 10px ;
margin-bottom : 40px ;
`