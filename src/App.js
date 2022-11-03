
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import { productsAndCartLoader } from './loader/productsAndCartLoader';
import Signup from './components/Signup/Signup';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          loader:()=> {
            return fetch('products.json')
          },
          element: <Shop></Shop>,
        },
        {
          path: "/order",
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: "/manage-inventory",
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    }
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
