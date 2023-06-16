import { useEffect ,useState} from "react";
import axios from 'axios';
import ProductCard from "../../components/ProductCard/ProductCard"
import "./ProductList.scss"

const ProductList = () => {
   const [products, setProducts] = useState()
   const [loading, setLoading] = useState(true)

   

    useEffect(()=>{
     axios.get("http://localhost:5050/api/products")
     .then((res)=> {setProducts(res.data)
                   setLoading(false)
                   console.log(res.data)}
     )
    },[])
if(!!loading){
return <div>Loading....</div>
}

  return (
    <section className="products-list">
      <div className="products-list__head">
      <p className="products-list__tag">Showing Result for "black t-shirts"</p>
      <div className="products-list__filter-container">
        <span className="products-list__filters-title">Show Filters<ion-icon  name="filter-outline"></ion-icon>
        </span>
        <span className="products-list__filters-title">
            Sort by: 
            <span className="products-list__filters-title-sub">Eco Rating <ion-icon  name="caret-down-outline"></ion-icon></span>
        </span>
      </div>
      </div>
      <div className="products-list__gallery">
      {products.map((product)=>{
        return <ProductCard product ={product}/>
      })
      
      }
      </div>
    </section>
  )
}

export default ProductList
