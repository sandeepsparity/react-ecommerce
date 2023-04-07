import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import Product from './Product';

const ProductList = ({ products, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList)
