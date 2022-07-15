import './ProductCard.scss'
import images from '../../assests/t.jpg'
const ProductCard = () => {
    const title = "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    const des = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error velit ipsa modi distinctio aliquid necessitatibus? Quis at, dolorem ea laboriosam quisquam facilis accusamus eius necessitatibus sunt iure ex culpa laudantium."

    return (

     <div className='productCard'>
        <img className = "productCard-image" src = {images}
        alt = "productimg"/>
        <h4 className='productCard-title'> {title.length  >= 35 ? title.slice(0,33) + '...': title}</h4>
        <p className='productCard-description'>{des.length  >=120 ? des.slice(0,115) + '...': des}</p>
        
     </div>
    );
   };
   export default ProductCard
