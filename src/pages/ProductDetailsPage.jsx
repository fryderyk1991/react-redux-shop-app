import { Container, Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { findProduct } from "../helpers/findProduct";
import CardButtons from "../components/CardButtons";

import { useState } from "react";

const ProductDetailsPage = () => {
  const [image, setImage] = useState(0);
  const [border, setBorder] = useState(null)
  const products = useSelector((state) => state.products.productsData);
  const { id } = useParams();
  const product = findProduct(products, +id);


  const handleThumbnailClick = (newImage, e) => {
    console.log(border)
    setBorder(e.target.src)
    setImage(newImage);
  };

  return (
    <Container sx={{ display: { md: "flex" } }}>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ maxWidth: 900 }}>
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{height: 0, paddingBottom: '100%', position: 'relative'}}
          >
            <img
              src={product.images[image]}
              style={{ width: "100%", objectFit: "cover", position: 'absolute', left: '0' }}
            />
          </motion.div>
        </Box>
        <Grid container spacing={1} sx={{ my: 2, flexWrap: "nowrap" }}>
          {product.images.map((img, index) => (
            <Grid
              key={index}
              item
              sx={{ maxWidth: 100, cursor: "pointer"}}
              component="div"
              onClick={(e) => handleThumbnailClick(index, e)}
            >
              <img src={img} style={{ width: "100%", objectFit: "cover"}} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ flex: 1, p: { md: 5, lg: 8, xl: 10 } }}>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {product.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1, fontWeight: 500, fontSize: 20 }}
        >
          ${product.price}.00
        </Typography>
        <CardButtons properIcons={"both"} />
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
