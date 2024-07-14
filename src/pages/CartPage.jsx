import { useDispatch, useSelector } from "react-redux";
import { matchProductsWithId } from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  CardMedia,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { deleteProductFromCart } from "../redux/reducers/cartSlice";
import Button from "../components/Button";
import LoadCircle from "../components/LoadCircle";
import MessageComponent from "../components/MessageComponent";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [quantinities, setQuantinities] = useState({});
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const { productsData, loading } = useSelector((state) => state.products);
  const cartIdArray = useSelector((state) => state.cart.cartProducts);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const filterCart = matchProductsWithId(productsData, cartIdArray);
    setCart(filterCart);
  }, [productsData, cartIdArray]);

  useEffect(() => {
    const initialQuantinities = {};
    cart.forEach((item) => {
      initialQuantinities[item.id] = { quantity: 1, totalPrice: item.price };
    });
    setQuantinities(initialQuantinities);
  }, [cart]);

  useEffect(() => {
    const updatedTotalPrice = Object.values(quantinities).reduce(
      (total, item) => {
        return total + item.totalPrice;
      },
      0
    );
    setTotalCartPrice(updatedTotalPrice);
  }, [quantinities]);

  const handleQuantinityChange = (id, value, price) => {
    setQuantinities((prevQuantinities) => ({
      ...prevQuantinities,
      [id]: { quantinity: value, totalPrice: value * price },
    }));
  };

  return (
    
    <Container>
      <>
        {loading && cart.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <LoadCircle size={32} />
          </Box>
        ) : (
          <>
            {cart.length > 0 && !loading && (
              <Box
                sx={{
                  display: { md: "flex", justifyContent: "space-between" },
                }}
              >
                <>
                  <Box sx={{ width: { md: "50%" } }}>
                    {cart.map((item) => (
                      <Box
                        key={item.id}
                        sx={{ mt: 3, display: "flex", alignItems: "center" }}
                      >
                        <CardMedia
                          onClick={() => navigate(`/product/${item.id}`)}
                          component="img"
                          image={item.images[0]}
                          alt={item.title}
                          data-id={item.id}
                          sx={{
                            cursor: "pointer",
                            maxWidth: { xs: 120, md: 100 },
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            gap: 1,
                            ml: 1,
                          }}
                        >
                          <Typography variant="body1" component="h3">
                            {item.title}
                          </Typography>
                          <FormControl>
                            <InputLabel>Quantinity</InputLabel>
                            <Select
                              value={quantinities[item.id]?.quantinity || 1}
                              label="Quantinity"
                              onChange={(e) =>
                                handleQuantinityChange(
                                  item.id,
                                  e.target.value,
                                  item.price
                                )
                              }
                              sx={{ height: "40px" }}
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
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            ${quantinities[item.id]?.totalPrice || item.price}
                            ,00
                          </Typography>
                        </Box>
                        <IconButton
                          sx={{ color: "primary.main" }}
                          onClick={() =>
                            dispatch(
                              deleteProductFromCart({
                                userId: user.uid,
                                productId: item.id,
                              })
                            )
                          }
                        >
                          <DeleteForeverOutlinedIcon />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ width: { md: "40%" }, mt: { xs: 8, md: 10 } }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="h5"
                        component="p"
                        sx={{ fontWeight: 500 }}
                      >
                        Total price:
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        sx={{ fontWeight: 500 }}
                      >
                        ${totalCartPrice},00
                      </Typography>
                    </Box>
                    <Divider sx={{ mt: 2, mb: 4 }} />
                    <Button value={"Order"} width={"100%"} />
                  </Box>
                </>
              </Box>
            )}
          </>
        )}
      </>
      <>
        {!loading &&
          (cart.length === 0 && (
            <MessageComponent
              text={"Your cart is empty"}
            />
          ))}
      </>
    </Container>
  );
};

export default CartPage