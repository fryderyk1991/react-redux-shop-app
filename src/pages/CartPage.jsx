import { useSelector } from "react-redux";
import { matchProductsWithId } from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CartPage = () => {
  const [cart, setCart] = useState([]); 
  const [quantinities, setQuantinities] = useState({});
  const products = useSelector(state => state.products.productsData);
  const cartIdArray = useSelector(state => state.cart.cartProducts);

  useEffect(() => {
    const filterCart = matchProductsWithId(products, cartIdArray);
    setCart(filterCart)
  }, [products, cartIdArray])

  
  const handleQuantinityChange = (id, value, price) => {
    setQuantinities(prevQuantinities => ({
      ...prevQuantinities,
      [id]: { quantity: value, totalPrice: value * price }
    }));
    console.log(quantinities)
  };

  return (
    <Container>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{quantinities[item.id]?.totalPrice || item.price}</p>
          <FormControl sx={{width: '50%'}}>
        <InputLabel>Quantinity</InputLabel>
        <Select 
          value={quantinities[item.id]?.quantinity || 1}
          label="Quantinity"
          onChange={(e) => handleQuantinityChange(item.id, e.target.value, item.price)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
        </div>
      ))}
      
    </Container>
  )
}

export default CartPage