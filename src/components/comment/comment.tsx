import React from 'react'
import type {CommentModel} from "../../types/comment.model"
import styles from "./comment.module.css";

interface CommentProps {
  comment: CommentModel;
}

const Comment = ({comment}: CommentProps ) => {
  return (
    <div className={styles['comment-box']}>
      <h3 className={styles['comment-author']}>{comment.name}</h3>
      <p className={styles['comment-body']}>{comment.body}</p>
      <p className={styles['comment-email']}>Email: {comment.email}</p>
    </div>
  )
}

export default Comment;