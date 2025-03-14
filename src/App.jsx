import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Layout from "./layout/Layout";
import Aboutus from "./pages/Aboutus/Aboutus";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contactus from "./pages/Contactus/Contactus";
import Achivement from "./pages/Achivement/Achivement";
import Process from "./pages/Process/Process";

function App() {
  const newLocal = <Route path="/Contactus" element={<Contactus />} />;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/Achivement" element={<Achivement />} />
        <Route path="/Process" element={<Process />} />
        {newLocal}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
