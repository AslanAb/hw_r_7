import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../common/api";
import { AuthorPost, Comments } from "../components";
import { IPost } from "../common/models";

const SinglePostPage = () => {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<IPost>(Object);
  const navigate = useNavigate();

  const getPost = async (id: number) => {
    const res = await apiClient.get(`/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    if (postId) {
      const id = parseInt(postId);
      !isNaN(id) && getPost(id);
    }
  }, [postId]);

  return (
    <div>
      <button onClick={() => navigate('/posts')}>Back</button>
      <h1>Single Post</h1>
      <AuthorPost id={postId}/>
      <h2>{post.title}</h2>
      <Comments id={postId}/>
    </div>
  );
};

export default SinglePostPage;
