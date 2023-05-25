import React from "react";

function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Post