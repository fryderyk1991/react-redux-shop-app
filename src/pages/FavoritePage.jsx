import { useSelector } from "react-redux"

const FavoritePage = () => {
  const products = useSelector(state => state.products.productsData);
  console.log(products)
  return (
    <div>FavoritePage</div>
  )
}

export default FavoritePage