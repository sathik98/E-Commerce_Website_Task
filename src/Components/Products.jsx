import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Products.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      <FaStar color={index < rating ? "gold" : "gray"} />
    </span>
  ));

  return (
    <p className="rating">
      <b> Rating:</b> {rating} {stars}
    </p>
  );
};

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const [showModal, setShowModal] = useState(false); // Added state for modal visibility
  const [selectedProduct, setSelectedProduct] = useState({}); // Added state for selected product

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (componentMounted) {
          const jsonData = await response.json();
          setData(jsonData);
          setFilter(jsonData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error1", error);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);

    setFilter(updateList);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ShowProducts = () => (
    <div>
      <div className="category-filter">
        <p>Category Filter:</p>
      </div>

      <div className="buttons">
        <button className="filter-button" onClick={() => setFilter(data)}>
          All
        </button>
        <button
          className="filter-button"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="filter-button"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="filter-button"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="filter-button"
          onClick={() => filterProduct("electronics")}
        >
          Electronic
        </button>
      </div>
      <div className="row">
        {filter.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div
              class="card h-100 text-center p-4"
              style={{ background: "aliceblue" }}
            >
              <img
                class="card-img-top"
                src={product.image}
                alt={product.title}
                height="250px"
              />
              <div class="card-body">
                <h5 class="card-title mb-0">
                  {product.title.substring(0, 12)}
                </h5>
                <p class="card-text lead fw-bold">${product.price}</p>
                {/* <NavLink to={`/products/${product.id}`} class="filter-button"> */}
                <div onClick={() => openModal(product)}>
                  <button className="but-now">View</button>
                </div>
                {/* </NavLink> */}
              </div>

              <div class="card-footer">
                <button className="but-now" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const cartCount = cart.length;

  // cart function
  const Cart = () => (
    <div className="cart-box">
      <h2>Shopping Carts :</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <FaShoppingCart style={{ height: "23px", width: "23px" }} />
        <p>Cart Count: {cartCount}</p>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>
                <b>Price:</b> ${item.price}
              </p>
              <p>Quantity: 1</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remover-item"
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="display-6 fw-bolder text-left">
              Top Deals of the Day
            </h1>
          </div>
        </div>

        <div>
          <Cart />
        </div>

        <div className="row justify-content-center">
          <ShowProducts />
        </div>

        {showModal && (
          <div className="modal show">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedProduct.image} className="details-img"></img>
              <h2>{selectedProduct.title}</h2>
              <div className="details-wrap">
                <p className="price-desc">
                  <b>Price: </b>${selectedProduct.price}
                </p>
                <StarRating rating={selectedProduct.rating.rate} />
                {/* <p className="rating">Rating: {selectedProduct.rating.rate} <span><FaStar /></span></p> */}
                <p className="rating">
                  <b>Count:</b> {selectedProduct.rating.count}
                </p>
              </div>
              <p className="price-desc">
                Description: {selectedProduct.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
