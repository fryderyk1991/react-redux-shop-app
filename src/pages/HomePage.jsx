import { Container } from "@mui/material";
import GridContainer from "../components/GridContainer";

import MessageComponent from '../components/MessageComponent';
import LoadCircle from '../components/LoadCircle';

import { useSelector } from "react-redux";


const HomePage = () => {
  const { productsData, loading } = useSelector(state => state.products)

  return (
    <Container>
            {loading && productsData.length === 0 ? (
              <LoadCircle />
            ) : (
              <GridContainer gridItems={productsData} />
            )}
            <>
             {!loading || productsData.length === 0 && (
                <MessageComponent text={"Sorry the products are not available at this moment"} />
              )} 
              </>
  </Container>
  );
};

export default HomePage;
