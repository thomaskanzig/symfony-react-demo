import React from 'react';
import Layout from "../components/Layout";
import {Link} from "react-router-dom";

const ProductListPage = () => {
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <img src="https://picsum.photos/60/60" className="rounded d-block product-list__image" alt="Image"/>
                            </th>
                            <td>0001</td>
                            <td>Name of Product</td>
                            <td>89.00 EUR</td>
                            <th>
                                <Link to="/products/0001" className="btn btn-primary">
                                    <i className="bi bi-eye-fill"/> Detail
                                </Link>
                            </th>
                        </tr>

                        <tr>
                            <th>
                                <img src="https://picsum.photos/60/60" className="rounded d-block" alt="Image"/>
                            </th>
                            <td>0002</td>
                            <td>Name of Product</td>
                            <td>67.00 EUR</td>
                            <th>
                                <Link to="/products/0001" className="btn btn-primary">
                                    <i className="bi bi-eye-fill"/> Detail
                                </Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default ProductListPage;
