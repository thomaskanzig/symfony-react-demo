import React from 'react';
import Layout from "../components/Layout";
import {Link} from "react-router-dom";

class ProductDetailPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h1>Product detail</h1>
                    <Link to="/products">Back to overview</Link>
                </div>
            </Layout>
        );
    }
}

export default ProductDetailPage;
