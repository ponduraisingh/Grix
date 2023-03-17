import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "page/laylout";
import PageHome from "page/home";

// import {Login} from 'pages/home/index';

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default PageRouter;