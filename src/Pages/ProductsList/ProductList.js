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
      <p>Showing Result for "black t-shirts"</p>
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
