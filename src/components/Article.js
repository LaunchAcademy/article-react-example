import React from 'react';

import Comment from "./Comment"

const Article = (props) => {
  //defined an event handler for when the user clicks "Add a comment"
  const makeComment = (event) => {
    event.preventDefault()
    alert("Commenting is closed. No trolls allowed.")
  }

  //build a list of components based on the article's comments 
  const commentComponents = props.article.comments.map((comment) => {
    return <Comment comment={comment} key={comment.id} />
  })

  //render the template with pertinent information
  return (
    <div className="article">
      <h2>{ props.article.title }</h2>
      <h3>{ props.article.author }</h3>
      <p>{ props.article.body }</p>

      <a onClick={makeComment}>Add a Comment</a>

      <ul>
        { commentComponents }
      </ul>

      <footer>
      { props.article.published }
      </footer>
    </div>
  )
}

export default Article