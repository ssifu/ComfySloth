import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {
          cart.length < h1 ? (
            <div className="empty">
              <h2>Your cart is empty</h2>
              <Link to={"/products"} className="btn">
                fill it
              </Link>
            </div>
          ) : null
          // <StripeCheckout />
        }
        <h1>Checkout Here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
