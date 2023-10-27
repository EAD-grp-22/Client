import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Outlet} from "react-router-dom";
import {Test} from "./pages"



const Root=()=>{
  return(
      <>
      <div><Outlet/></div>
      </>
  )
}

const router=createBrowserRouter(
  createRoutesFromElements( 
      <>
          <Route path="/" element={<Root/>}>
                  <>
                      <Route path="/" element={<Test/>}/>
                  </>
          </Route>
          <Route path="*" element={<>Page Not Found</>}/>
      </>
  )
)


export default function App() {
  return(
        <RouterProvider router={router}/>
)
}