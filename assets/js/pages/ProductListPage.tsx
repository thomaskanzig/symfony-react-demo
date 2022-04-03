import React from 'react';
import Layout from "../components/Layout";
import {Link} from "react-router-dom";

const ProductListPage = () => {
    return (
        <Layout>
            <div className="container">
                <h1>Product list</h1>
                <Link to="/products/asdsadas">See an example of detail product</Link>
            </div>
        </Layout>
    );
}

export default ProductListPage;
