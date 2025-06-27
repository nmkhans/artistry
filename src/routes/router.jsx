import { createBrowserRouter } from "react-router";
import App from "./../App";
import Home from "../pages/Home/Home";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import AddArtifacts from "./../pages/AddArtifacts/AddArtifacts";
import MyArtifacts from "./../pages/MyArtifacts/MyArtifacts";
import ArtifactDetail from "./../pages/ArtifactDetail/ArtifactDetail";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import UpdateArtifacts from "../pages/UpdateArtifacts/UpdateArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-artifacts",
        element: <AllArtifacts />,
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-artifacts/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/artifact-detail/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts/",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
