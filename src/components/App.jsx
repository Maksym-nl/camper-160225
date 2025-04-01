import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'pages/catalog';
import DetailsCamperPage from 'pages/camperPageDetails';
import Home from 'pages/home';

// import CamperCard from './camperCard/CamperCard';
import { Layout } from './layout/Layout';
// import { Features } from '../components/features/Features';
// import { Reviews } from './reviews/Reviews';
import { NotFound } from './notFound/NotFound';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<DetailsCamperPage />}>
          {/* <Route path="features" element={<div><Features /></div>} />
          <Route
            path="reviews"
            element={
              <div>
                <Reviews />
              </div>
            }
          /> */}
        </Route>
        <Route path="404" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
