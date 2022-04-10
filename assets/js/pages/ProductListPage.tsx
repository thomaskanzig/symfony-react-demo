import React, {useContext, useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Link} from "react-router-dom";
import {Product} from "../models/Product";
import AuthContext from "../store/AuthContext";

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const Auth = useContext(AuthContext);

    useEffect(() => {
        getProductsApi();
    }, []);

    const getProductsApi = async () => {
        const response = await fetch(
            "/api/products",
            {
                headers: {
                    'Authorization': `Bearer ${Auth.token}`
                },
            }
        );
        const data = await response.json();
        setProducts(data);
    };

    return (
        <Layout>
            <div className="container">
                <h1 className="mb-5">Product list</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Article number</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: Product) =>
                            <tr key={product.id}>
                                <th className="product-list__image">
                                    <img src={product.image} className="rounded d-block" alt="Image"/>
                                </th>
                                <td>{product.articleNumber}</td>
                                <td className="product-list__name">{product.name}</td>
                                <td>{product.price}</td>
                                <th className="text-end">
                                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                                        <i className="bi bi-eye-fill"/> Detail
                                    </Link>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default ProductListPage;
