import React from 'react';
import Product from './Product';
import useProducts from '../Hooks/useProducs';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';

const Home = () => {
     const {products,loading} = useProducts();
    //  console.log(products)
    const filterProducts = products.slice(0,6)
    return (
       <div className='py-6 px-6 md:px-0'>
            <div className='flex justify-between my-3'>
                <h1 className='font-semibold text-xl'>Featured Products</h1>
                <button className='btn'><Link to="/product">See All Products</Link></button>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
             {
                filterProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Home;