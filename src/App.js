import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./Layout/Layout";
import { Provider } from "react-redux";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./Auth/Auth";
import STORE from "./redux/Store";

function App() {
  return (
    <Provider store={STORE}>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />} path="/dashoard/*" />

              {/* <Route element={<Products/>} path="/products"/> */}
            </Route>

            <Route element={<Login />} path="/" />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
