import React from 'react';
import Layout from "../components/Layout";
import {Link} from "react-router-dom";

const ProductDetailPage = () => {
    return (
        <Layout>
            <div className="container">
                <Link to="/products">
                    Go back to overview
                </Link>

                <h1 className="my-5">Name of Product</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mb-4">
                        <img src="https://picsum.photos/800/600" className="rounded d-block img-fluid" alt="Image"/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <h3>89,99</h3>
                        <div className="product-detail__article-number">Article number: 0001</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetailPage;
