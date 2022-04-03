import React from 'react';
import LoginPage from "./pages/LoginPage";
import {Route, Routes, useNavigate} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProducDetailPage";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Routes>
                    <Route path='/' element={<LoginPage/>} />
                    <Route path='/products' element={<ProductListPage />} />
                    <Route path='/products/:productId' element={<ProductDetailPage />} />
                </Routes>
            </React.Fragment>
        );
    }
}

export default App;
