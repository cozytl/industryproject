import "./ProductCard.scss"
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const {img, name,id} =  product
  return (
    <Link className="product-card" to ={`/${id}`} >

      <img className="product-card__img" src={img} alt="product_image"/>
      <h3 className="product-card__title" >{name}</h3>
      <p className="product-card__type" >Black t-shirt</p>

    </Link>
  )
}

export default ProductCard
