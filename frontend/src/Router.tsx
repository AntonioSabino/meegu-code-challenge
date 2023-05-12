import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import DefaultLayout from './layout'
import Home from './Pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
