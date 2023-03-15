import { useState } from "react";
import { PostsList } from "../components";
import { Outlet, useNavigate } from "react-router-dom";

const PostsPage = () => {
  const [postId, setPostId] = useState(0);
  const navigate = useNavigate();

  const onClickPost = (id: number) => {
    setPostId(id);
    navigate(`/posts/${id}`);
  };

  return (
    <div className="App">
      <h1>Posts Page</h1>
      <div className="container">
        <div className="column">
          <PostsList onClickPost={onClickPost} />
        </div>
        <div className="column">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
