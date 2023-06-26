import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Root from './components/Root';

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
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
