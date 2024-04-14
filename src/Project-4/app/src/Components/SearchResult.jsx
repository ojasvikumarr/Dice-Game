import styled from "styled-components";
import { BASE_URL, Button } from "../App";
const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <FoodCards>
        {data?.map((food) => {
          return(<FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="food_info">
              <div className="Info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>
              <div className="btn">
              <Button>{food.price.toFixed(2)}</Button>
              </div>
            </div>
          </FoodCard>);
        })}
      </FoodCards>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCardsContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding-top : 40px ;

`;
const FoodCards = styled.div`
display : flex ;
flex-wrap : wrap ;
row-gap : 32px ;
column-gap : 20px ;
justify-content : center ;
align-items : center ;
`;
const FoodCard = styled.div`
    width : 340px ;
    height : 167px ;
    flex-shrink : 0;
    border : 1px solid cyan ;
    border-radius : 20px ;
    display : flex ;
    padding-top : 10px ;
    border: 0.659px solid #98F9FF;

    background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
    
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.184196472167969px);
    
    
    h3{
        font-size : 16px ;
        margin-top : 8px ;
        font-weight : 500 ;
    }
    p{
        margin-top : 4px ;
        font-size : 12px ;
    }
    .food_info{
        display : flex ;
        flex-direction : column ;
        justify-content : space-between ;
        align-items : end ;
        padding : 0 20px 20px 0 ;
    }
    
`;
