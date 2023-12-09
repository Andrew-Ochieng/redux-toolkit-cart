import '../styles/home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cartSlice'

const Home = ({ products, loading }) => {
  const cart = useSelector((state) => state.cart.cartProductIds)
  const dispatch = useDispatch()

  return (
    <div className="container product-catalogue">
      <div className="row">
        {loading ? (
          <p>Loading products... </p>
        ) : (
          <>
            {products.map((product) => {
              return (
                <div className="wrapper col-md-4" key={product.id}>
                  <div className="card">
                    <img
                      className="card-img-top center-block"
                      src={product.image}
                      alt="Card cap"
                    />

                    <div className="card-body text-center">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>

                      <div className="d-flex justify-content-between">
                        {!cart.includes(product.id) && (
                          <button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>
                            Add to cart
                          </button>
                        )} 

                        {cart.includes(product.id) && (
                          <button className="btn btn-primary" onClick={() => dispatch((removeFromCart(product.id)))}>
                            Remove from cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )}
        
      </div>
    </div>
  )
}

export default Home