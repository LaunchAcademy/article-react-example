import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Article from "./components/Article"
import Comment from "./components/Comment"

const articles = [
  {
    slug: "react-is-the-coolest",
    title: "React is the coolest",
    body: "Here are fifty reasons why you should love React",
    author: "Jon Snow",
    published: "03/09/2019",
    comments: [
    {
      "id": 1,
      "author": "Sally Doe",
      "body": "I like Angular better."
    },
    {
      "id": 2,
      "author": "Sam Iam",
      "body": "Vue is the coolest"
    }
    ]
  },
  {
    slug: "express-the-new-backend",
    title: "Express: the new way to code backends",
    body: "NodeJS is increasing in popularity",
    author: "Node Fanboy",
    published: "03/08/2019",
    comments: [
    {
      id: 3,
      "author": "Sally Doe",
      "body": "I like Angular better."
    },
    {
      id: 4,
      "author": "Sam Iam",
      "body": "Vue is the coolest"
    }
    ]
  }
]

//bulid a list of article components based on the data
const articleComponents = articles.map(article => {
  return <Article article={article} key={article.slug} />
})

let comments = []

articles.forEach(article => {
  comments = comments.concat(article.comments)
})

let commentComponents = comments.map(comment => {
  return <Comment comment={comment} key={comment.id} />
})

//insert the list of articles into the DOM
ReactDOM.render(
  <div>
    { articleComponents }
  </div>,
  document.getElementById('app')
);
