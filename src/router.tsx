import { createBrowserRouter } from "react-router-dom";
import { PostsPage, GeneralPage, ErrorPage, SinglePostPage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/posts",
        element: <PostsPage />,
        children: [
          {
            path: "/posts/:postId",
            element: <SinglePostPage />,
          }],
      },
    ],
  },
]);

export default router;
