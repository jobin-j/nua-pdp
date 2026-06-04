import { createBrowserRouter } from 'react-router-dom';
import ProductListing from '../pages/ProductListing';
import ProductDetail from '../pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductListing />
  },
  {
    path: '/product/:id',
    element: <ProductDetail />
  }
]);

export default router;