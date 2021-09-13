import React from 'react';
import CommentContainer from './styles';

function Comment(props) {
  return(
    <CommentContainer>
      <a href="">
        <img className="comment__avatar" src={props.avatar} alt={props.name} width="38" height="38" />
      </a>
      <section className="comment__card">
        <div className={`comment__body ${props.type == "add-comment" && "add-comment"}`}>
          {props.type == "add-comment" &&
          <textarea className="comment__textarea" name="" id="" placeholder="Agregar comentario..."></textarea>
          }
          <p className="comment__name">{props.name && `${props.name} - `}</p>
          <p className="comment__date">{props.date}</p>
          <p className="comment__copy">{props.copy}</p>
        </div>
        {props.type != "add-comment" &&
          <section className="comment__cta">
              <p className="comment__like">
                <span className="comment__like-img"></span> {props.likes} likes
              </p>
              <p className="comment__comment">
                <span className="comment__comment-img"></span> {props.comments} comments
              </p>
          </section>
        }
      </section>
    </CommentContainer>
  );
}

export default Comment;