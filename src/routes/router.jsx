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
        element: <AddArtifacts />,
        // private route
      },
      {
        path: "/my-artifacts",
        element: <MyArtifacts />,
        // private route
      },
      {
        path: "/artifact-detail/:id",
        element: <ArtifactDetail />,
        // private route
      },
      {
        path: "/liked-artifacts/",
        element: <LikedArtifacts />,
        // private route
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
