import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import DefaultLayout from './layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<h1>Home</h1>} />
    </Route>,
  ),
)

export default function Router() {
  return <RouterProvider router={router} />
}
