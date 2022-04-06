import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Link, useParams} from "react-router-dom";
import {Product} from "../models/Product";

const ProductDetailPage = () => {
    const params = useParams();
    const [product, setProduct] = useState<Product>();

    const { productId } = params;

    useEffect(() => {
        getProductApi();
    }, []);

    const getProductApi = async () => {
        const response = await fetch(
            `/api/product/${productId}`,
            {
                headers: {
                    'Authorization': __APP__.AUTH_API_TOKEN
                },
            }
        );
        const data = await response.json();
        setProduct(data);
    };

    return (
        <Layout>
            <div className="container">
                <Link to="/products">
                    Go back to overview
                </Link>

                <h1 className="my-5">{product?.name}</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mb-4">
                        <img src={product?.image} className="rounded d-block img-fluid" alt="Image"/>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <p>{product?.description}</p>
                        <h3>{product?.price}</h3>
                        <div className="product-detail__article-number">Article number: {product?.articleNumber}</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetailPage;
