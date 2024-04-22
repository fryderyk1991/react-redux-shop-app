import { Card } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { findProduct } from "../helpers/findProduct";

import { useEffect } from "react";

const ProductDetailsPage = () => {
  const products = useSelector((state) => state.products.productsData);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = findProduct(products, +id);

  useEffect(() => {
    if (!product) {
      navigate("/404.html");
    }
  }, [navigate, product]);

console.log(product)
  return <Card>????</Card>;
};





export default ProductDetailsPage;
