import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Electronics from "./pages/Electronics";
import Foods from "./pages/Foods";
import Fashion from "./pages/Fashion";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:electronicsId" element={<Cart />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/foods/:foodsId" element={<Cart />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/:fashionId" element={<Cart />} />
          <Route path="signin" element={<SignIn setUser={setUser}></SignIn>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />{" "}
              </ProtectedRoute>
            }
          />

          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
