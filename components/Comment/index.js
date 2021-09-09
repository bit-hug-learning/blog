import React from 'react';
import CommentContainer from './styles';

function Comment(props) {
  return(
    <CommentContainer>
      <img className="comment__avatar" src="" alt="" />
      <section className="comment__card">
        <input className="comment__input" type="text" placeholder="Agregar comentario..."/>
        <p className="comment__name">{props.name}</p>
        <p className="comment__name">{props.date}</p>
      </section>
    </CommentContainer>
  );
}

export default Comment;