import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import {
  Loading,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from './components';
import { formatPrice } from './utils/helpers';



const Product = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const { productID } = useParams()

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/api/products?id=${productID}`)
      setProduct(data)
    } catch (error) {}
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <Loading/>
    )
  }
  
  const { fields } = product
  const { 
    name, 
    price, 
    description, 
    stock, 
    stars, 
    reviews, 
    company, 
    images,
    colors,
    id,
    } = fields
    console.log(product);
    console.log(fields);

  return (
    <Wrapper>
      <PageHero title={name} product/>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images}/>
          <section className="content">
            <h2>{name}</h2>
            <Stars reviews={reviews} stars={stars}/>
            <h5>{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span> Available: </span>
              {stock > 0 ? 'In stock':'out of stock'}
            </p>
            <p className="info">
              <span> SKU: </span>
              {name.slice(0,20)}
            </p>
            <p className="info">
              <span> Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={fields}/>}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default Product
