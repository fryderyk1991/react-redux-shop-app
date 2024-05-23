import { Container, Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { findProduct } from "../helpers/findProduct";
import CardButtons from "../components/CardButtons";
import LoadCircle from "../components/LoadCircle";

import { useState, useEffect } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [image, setImage] = useState(0);
  const products = useSelector((state) => state.products.productsData);
  const product = findProduct(products, +id);
  const [border, setBorder] = useState(null);

  const handleThumbnailClick = (newImage, e) => {
    setBorder(e.target.src)
    setImage(newImage);
  };

  useEffect(() => {
    if(product) {
      setBorder(product.images[0])
    }
  },[product])

  return (
  <Container sx={{ display: { md: "flex" } }}>
    {product ? (
      <>
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
              alt={product.title}
              style={{ width: "100%", objectFit: "cover", position: 'absolute', left: '0' }}
            />
          </motion.div>
        </Box>
      <Grid container sx={{ my: 2, flexWrap: "nowrap", gap: 1}}>
        {product.images.map((img, index) => (
            <Grid
              key={index}
              item
              sx={{ maxWidth: 100, cursor: "pointer" }}
              component="div"
              onClick={(e) => handleThumbnailClick(index, e)}
            >
                {border === img ? (
                  <img src={img} alt={product.title} style={{ width: "100%", height: '100%', objectFit: "cover", outline: '3px solid #ffac33', transition: 'outline 0.3s ease-out'}} />
                ) : (
                  <img src={img} style={{ width: "100%", height: '100%', objectFit: "cover" , outline: '3px solid transparent'}} />
                )}
            </Grid>
          ))
        }
      </Grid>
    </Box>
    <Box sx={{ flex: 1, p: { md: 5, lg: 8, xl: 10 } }}>
        <>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {product.description}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, fontWeight: 500, fontSize: 20 }}
          >
            ${product.price},00
          </Typography>
          <CardButtons properIcons={"both"}/>
        </>
    </Box>
    </>
    ) : (
      <LoadCircle />
    )}
</Container>
  );
};

export default ProductDetailsPage;



