import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import About1 from "../pages/About1";
import About2 from "../pages/About2";
import Vehical from "../pages/Vehical";
import VehicalShow from "../pages/VehicalShow";
import UseNavigate from "../pages/UseNavigate";
import Contact from "../pages/Contact";
import VehicalsList from "../pages/VehicalsList";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../pages/ProtectedRoute";
import { lazy } from "react";
import { Suspense } from "react";
import CarCompany from "../pages/CarCompany";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SecuredAuth from "../pages/SecuredAuth";

const Products = lazy(() => import("../pages/Products"));

const AppRouter = () => {
  return (
    <div className="container">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />}>
          <Route index element={<About1 />} />
          <Route path="/about/about1" element={<About1 />} />
          <Route path="/about/about2" element={<About2 />} />
        </Route>

        <Route path="/vehical" element={<VehicalsList />}>
          <Route index element={<Vehical />} />
          <Route path=":vehId" element={<VehicalShow />} />
        </Route>

        <Route path="/navigate" element={<UseNavigate />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<div>Loading</div>}>
              <Products />
            </Suspense>
          }
        />

        <Route path="/carCompany" element={<CarCompany />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <SecuredAuth>
              <Profile />
            </SecuredAuth>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
