import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./Components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData , setFilterData] = useState(null);
  const [selectedBtn , setSelectedBtn] = useState("all");
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);
  console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  const searchFood = (input) => {
    const searchValue = input.target.value;
    console.log(searchValue);

    if(searchValue == ""){
      setFilterData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if(type == "all"){
      setFilterData(data);
      setSelectedBtn("all");
      return ;
    }
    const filter = data?.filter((food) => {
      food.type.toLowerCase().includes(type.toLowerCase());
    })
    setFilterData(filter);
    setSelectedBtn(type);
  }
  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/LOGO.svg" alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={() => filterFood("all")}>All</Button>
        <Button onClick={() => filterFood("breakfast")}>BreakFast</Button>
        <Button onClick={() => filterFood("lunch")}>Lunch</Button>
        <Button onClick={() => filterFood("dinner")}>Dinner</Button>
      </FilterContainer>
      <SearchResult data={filterData} />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  background-color: #323334;
  max-width: 1200px;
  margun: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 10px;
      padding: 0 10px;
      color: white;
      height: 40px;
      font-size: 16px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 10px;
  border: none;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor : pointer ;
  &:hover{
    background : red;
  }
`;
