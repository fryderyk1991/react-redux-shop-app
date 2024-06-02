import { useDispatch, useSelector } from "react-redux";
import { matchProductsWithId } from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

import { Container } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';

import { deleteProduct } from "../redux/reducers/cartSlice";

const CartPage = () => {
  const [cart, setCart] = useState([]); 
  const [quantinities, setQuantinities] = useState({});
  const [totalCartPrice, setTotalCartPrice] = useState(0)
  const products = useSelector(state => state.products.productsData);
  const cartIdArray = useSelector(state => state.cart.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterCart = matchProductsWithId(products, cartIdArray);
    setCart(filterCart)
  }, [products, cartIdArray])

  useEffect(() => {
    const initialQuantinities = {};
    cart.forEach(item => {
      initialQuantinities[item.id] = { quantity: 1, totalPrice: item.price };
    });
    setQuantinities(initialQuantinities);
  }, [cart]);

  useEffect(() => {
    const updatedTotalPrice = Object.values(quantinities).reduce((total, item) => {
      return total + item.totalPrice;
    }, 0);
    setTotalCartPrice(updatedTotalPrice);
  }, [quantinities]);

  const handleQuantinityChange = (id, value, price) => {
    setQuantinities(prevQuantinities => ({
      ...prevQuantinities,
      [id]: { quantinity: value, totalPrice: value * price }
    }));
  };



  return (
    <Container>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>${quantinities[item.id]?.totalPrice || item.price},00</p>
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
      <IconButton sx={{ color: 'primary.main' }} onClick={() => dispatch(deleteProduct(item.id))} >
      <DeleteForeverOutlinedIcon />
      </IconButton>
      
        </div>
      ))}
      <h2>Total price: ${totalCartPrice},00</h2>
    </Container>
  )
}

export default CartPage