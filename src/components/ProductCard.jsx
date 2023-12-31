import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";

import watch from "../../public/images/watch.jpg";
import watch2 from "../../public/images/watch-1.avif";
import wish from "../../public/images/wish.svg";

import prodcompare from "../../public/images/prodcompare.svg";
import view from "../../public/images/view.svg";
import addcart from "../../public/images/add-cart.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id">
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button className="border-0 bg-transparent">
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image">
              <img src={watch} className="img-fluid" alt="product image" />
              <img src={watch2} className="img-fluid" alt="product image" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Kids headphones bulk 10 pack multi colored for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt...
              </p>
              <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
