import { useSelector } from "react-redux";
import { matchProductsWithId } from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]); 
  const products = useSelector(state => state.products.productsData);
  const cartIdArray = useSelector(state => state.cart.cartProducts);

  useEffect(() => {
    const filterCart = matchProductsWithId(products, cartIdArray);
    setCart(filterCart)
  }, [products, cartIdArray])
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default CartPage