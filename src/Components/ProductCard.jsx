import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    const {name,image,category,price,id} = product
    // console.log(product)
    return (
        <div className="card bg-base-100 shadow-sm mx-auto border-1 border-gray-300">
  <figure className='h-52'>
    <img

      src={image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className='hidden md:block'>
        <p>Category: {category}</p>
    <p>Price: {price}$</p>
    </div>
    <div className="card-actions justify-start flex-1">
      <button className="btn bg-amber-600 text-white hover:scale-115  "><Link to={`/product-details/${id}`}>View Details</Link> </button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;