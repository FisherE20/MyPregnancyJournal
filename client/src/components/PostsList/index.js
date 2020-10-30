import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_POSTS, LOADING } from "../../utils/actions";
import Axios from "axios";

function PostsList() {
  const [state, dispatch] = useStoreContext();

  const getPosts = () => {
    dispatch({ type: LOADING });
    Axios.get(
      "/api/posts",
    ).then(results => {
      dispatch({
        type: UPDATE_POSTS,
        posts: results.data
      });
    })
    .catch(err => console.log(err));
      
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>All Journal Entries</h2>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"api/posts/" + post._id}>
                <strong>
                  {post.title} 
                </strong>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
    </div>
  );
}

export default PostsList;
