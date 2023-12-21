import { DetailsCountry } from "./pages/DetailsCountry";
import { Home } from "./pages/Home";
import { AppLayout } from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <DetailsCountry />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
