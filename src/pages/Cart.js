import {Link, useParams} from 'react-router-dom'
const Cart= () =>{
  const {fashionId, foodsId, ElectronicsId} = useParams()
    return (
        <section className="section">
            <h2>Cart</h2>
        </section>
    );
};
export default Cart;