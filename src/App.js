import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Root from './components/Root';
import ProductDetails from './components/ProductDetail';

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}></Route>
//     <Route path='/products' element={<Products />}></Route>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinition)

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      {path: '/products', element: <Products />},
      {path: '/products/:id', element: <ProductDetails />}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
