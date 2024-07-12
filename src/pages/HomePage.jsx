import { Container, Box } from "@mui/material";
import GridContainer from "../components/GridContainer";

import MessageComponent from "../components/MessageComponent";
import LoadCircle from "../components/LoadCircle";

import { useSelector } from "react-redux";

const HomePage = () => {
  const { productsData, loading } = useSelector((state) => state.products);

  return (
    <Container sx={{mb: 5}}>
      {loading && productsData.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <LoadCircle size={32}/>
        </Box>
      ) : (
        <GridContainer gridItems={productsData} />
      )}
      <>
        {!loading ||
          (productsData.length === 0 && (
            <MessageComponent
              text={"Sorry the products are not available at this moment"}
            />
          ))}
      </>
    </Container>
  );
};

export default HomePage;
