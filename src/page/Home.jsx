import React from 'react'
// import productsCard from '../component/HomepageCom/productsCard'
// import productsData from './productsCard'
import ProductCard from '../component/homepageCom/ProductCard'
import Cart from './Cart'

const products = [
    {
      _id: 1,
      name: 'T-Shirt',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
    {
      _id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'White',
    },
    {
      _id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    },
    {
      _id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,
      color: 'Black',
    }
    // More products...
  ]

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <ProductCard products={products}/>
      <Cart/>
      {/* <h1>this is home page</h1> */}
    </div>
  )
}

export default Home
