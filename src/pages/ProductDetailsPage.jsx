import { Container, Box, Grid, Typography } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { findProduct } from "../helpers/findProduct";
import CardButtons from "../components/CardButtons"

import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const [image, setImage] = useState(0);
  const products = useSelector((state) => state.products.productsData);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = findProduct(products, +id);

  const handleThumbailClick = (newImage) => {
    setImage(newImage);
  };

  useEffect(() => {
    if (!product) {
      navigate("/404.html");
    }
  }, [navigate, product]);
  console.log(product)
  return (
    <Container sx={{ display: {md: 'flex'}}}>
      <Box sx={{ flex: 1}}>
      <Box sx={{ maxWidth: 900, borderRadius: 1 }}>
        <img
          src={product.images[image]}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Grid container spacing={1} sx={{ my: 2 }}>
        {product.images.map((img, index) => (
          <Grid
            key={index}
            item
            sx={{ maxWidth: 100, cursor: "pointer"}}
            component="div"
            onClick={() => handleThumbailClick(index)}
          >
            <img src={img} style={{ width: "100%", objectFit: "cover" }} />
          </Grid>
        ))}
      </Grid>
      </Box>
        <Box sx={{ flex: 1, p: { md: 5, lg: 8, xl: 10}}}>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>{product.description}</Typography>
        <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, fontSize: 20 }}>${product.price}.00</Typography>
        <CardButtons properIcons={'both'} />
        </Box>
    </Container>
    
  );
};

export default ProductDetailsPage;
