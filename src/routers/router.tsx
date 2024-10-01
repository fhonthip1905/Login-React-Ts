import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"

const router = createBrowserRouter([
    { path: "/", element: <LoginPage/>},
    {path: "/dashboard", element: <DashboardPage/>}
])

export default function Router() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
