
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Register from "./pages/register"
import Login from "./pages/login"
import Write from "./pages/write"
import Single from "./pages/single"
import Home from "./pages/home"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./style.scss"


const Layout=()=>{
  return(
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}


const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/post/:id",
          element: <Single></Single>
        },
        {
          path:"/write",
          element: <Write></Write>
        },
    ]
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/single",
    element: <Single></Single>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/write",
    element: <Write></Write>
  },
])


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
      
    </div>
  );
}



export default App;
