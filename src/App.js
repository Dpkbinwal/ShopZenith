import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
// import Login from "./components//login/login";
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context"
import ErrorPage from "./error";
function App() {
    return (
      <Router>
        <AppContext>
            <Header />
                <Routes>
                    <Route path="/" element ={<Home />} />
                    <Route path="/category/:id" element ={<Category />} />
                    <Route path="/product/:id" element ={<SingleProduct />} />
                    <Route path="*" element ={<ErrorPage />} />
                </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
      </Router>  


    );
}

export default App;
