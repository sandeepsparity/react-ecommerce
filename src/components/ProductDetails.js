import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cartActions';

const ProductDetails = (props) => {
    const { product, addToCart } = props;

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.id;
    const product = state.products.find(product => product.id === Number(productId));
    return {
        product,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToCart,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);