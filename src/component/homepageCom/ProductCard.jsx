import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetCart } from '../../slices/cartSlice';

const ProductCard = ({ products }) => {
    const dispatch = useDispatch();
    const {totalItems, cartData} = useSelector((state) => state.cart);

    const CartHandler = (product) => {
        dispatch(addToCart(product))
        // alert("Product added",);
        console.log("Product data : ", product);
        console.log("Total Product data : ", totalItems);
        console.log("Cart Product data : ", cartData);
        // dispatch(resetCart);
        // console.log("Total Product data : ", totalItems);
        // console.log("Cart Product data : ", cartData);
    }

    // const handleAddToCart = (product) => {
    //     dispatch(addToCart(product))
    // }

    return (
        <div className=' flex flex-col w-10/12 mx-auto  gap-9 justify-center items-center'>
            <h2 className=' text-gray-900 font-semibold text-2xl'>All Product</h2>
            <div className=' flex gap-8 flex-col lg:flex-row ' >
                {
                    products.map((product) => (
                        <div className=' '>
                            <img src={product.imageSrc} alt={product.imageAlt} />
                            <div className=' flex justify-between'>
                                <p className=' text-gray-500'>{product.name}</p>
                                <p>${product.price}</p>
                            </div>
                            <div className=' text-gray-500'>{product.color}</div>
                            <div className=' flex justify-center mx-auto'>
                                <button className=' buyBtn' onClick={() => CartHandler(product)}>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ProductCard
