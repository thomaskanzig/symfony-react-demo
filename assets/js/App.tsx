import React from 'react';
import LoginPage from "./pages/LoginPage";
import {Route, Routes} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProducDetailPage";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='/products' element={<ProductListPage />} />y
                <Route path='/products/:productId' element={<ProductDetailPage />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
