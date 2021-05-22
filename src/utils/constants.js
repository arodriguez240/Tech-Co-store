import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';



export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      "At TECH, we always aim to provide you with a great shopping experience. TECH offers selection, service and sales expertise competitive with other leading service-oriented companies.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      "TECH has long been known for the computer and electronic device stores with the most experienced, knowledgeable and helpful sales associates.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      "A product assortment which is both deep and wide has been a mainstay of TECH since the company occupied its first large format store way back in 1982. With over 30,000 items in stock.",
  },
]

// export const products_url = 'https://course-api.com/react-store-products';

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const products_url = '/api/products'

export const single_product_url = `/api/products?id=`
