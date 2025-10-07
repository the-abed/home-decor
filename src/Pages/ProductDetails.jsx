import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducs';

const ProductDetails = () => {
    const {products,loading} = useProducts();
    const { id } = useParams();
    const filterProducts = products.find(p => p.id === Number(id))
    console.log(filterProducts)
    const {name,image,category,price,description,material} = filterProducts || {}

    if (loading) return <p>Loading.......</p>
    return (
       <div className="hero my-10 shadow-emerald-100 shadow-sm  mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h2 className='text-xl font-bold mt-3'>Material: {material}</h2>
      <p className="py-4 font-semibold">
       Details: {description}
      </p>
      <p>Price: {price}$</p>
      <p></p>
      <button className="btn bg-amber-600 text-white hover:scale-115 mt-5">Add to Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;

