import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { useEffect } from "react";
import { fetchPost } from "../features/postSlice";

function PostComponent() {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((store) => store.posts);
  console.log(status);
  useEffect(
    function () {
      if (status === "idle") {
        dispatch(fetchPost());
      }
    },
    [dispatch, error, status]
  );

  if (status === "loading") return <p> Loading Posts</p>;
  if (status === "error") return <p> Error : {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {status === "loading" && (
        <p>
          <h2>Loading the posts </h2>
        </p>
      )}

      {status === "failed" && <p>OOps!!! {error}</p>}
      {status === "success" && posts.map((post) => <p>{post.title}</p>)}
    </div>
  );
}

export default PostComponent;
