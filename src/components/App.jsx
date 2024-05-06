import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Product = () => {
  return (
    <div>
      <h2>Cookies</h2>
			<p>Price: 999 credits</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default Product;
