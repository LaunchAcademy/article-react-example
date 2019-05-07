import React from 'react';

const Comment = (props) => {
  //output the details of the comment
  return <li>
    <h5>{ props.comment.author }</h5>
    <p>{props.comment.body }</p>
  </li>
}

export default Comment