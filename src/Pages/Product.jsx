import React from 'react';
import { Link } from 'react-router';
import useProducts from '../Hooks/useProducs';
import ProductCard from '../Components/ProductCard';

const Product = () => {
   const {products,loading} = useProducts();
    return (
         <div className='max-w-6xl mx-auto py-6 px-5 md:px-0'>
            <div className='flex justify-between my-3'>
                <h1 className='font-semibold text-xl'>All Products</h1>
                <input type="Search" placeholder="Search Product" className="input" />
            </div>
           <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
             {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Product;