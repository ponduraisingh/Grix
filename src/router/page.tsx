import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "page/laylout";
import PageHome from "page/home";
import CourseHome from "page/course";
import Terms from "page/docs/terms";
import Privacy from "page/docs/privacy";

// import {Login} from 'pages/home/index';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<PageHome />} />
          <Route path="/course/:id" element={<CourseHome />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default PageRouter;