import React from "react";
import Post from "./Post";

function Blog({ posts }) {
    
      
    return (
      <div className="blog">
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </div>
    );
  }

  export default Blog