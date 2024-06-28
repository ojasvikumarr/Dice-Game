import styled from "styled-components";

export default function StartGame({toggle}){
    return(
        <>
        <Container>
            <div>
            <img src="https://m.media-amazon.com/images/I/61HCKXQmOZL._SL1024_.jpg" alt="" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
        </>
    )
}

const Container = styled.div`
display : flex ;
max-width: 1180px ;
margin : auto ;
height : 100vh ;
align-items : center ;

.content{
    h1{
        font-size : 96px ;
        white-space : nowrap ;
    }

}
`
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
