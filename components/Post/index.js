import React from 'react';
import PostContainer from 'components/Post/styles';

function Post(props) {
  return(
    <PostContainer>
    <article className="post">
      <img className="post__image" src={props.image} alt="avatar" />
      <section className="post__body">
        <p className="post__autor">{props.autor}</p>
        <p className="post__date">{props.date}</p>
        <h2 className="post__title">{props.title}</h2>
        <p className="post__copy">{props.copy}
        </p>
        <div className="post__hashtags-container">
          {/* Estos datos salen con un map a un arreglo: */}

          {props.hashtags.map(hash => <p className="post__hashtag">{hash}</p>)}
          {/* <p className="post__hashtag">#HTML</p> */}
        </div>

        <section className="post__cta">
          <p className="post__like">
            <span className="post__like-img"></span> {props.likes} likes
          </p>
          <p className="post__comment">
            <span className="post__comment-img"></span> {props.comments} comments
          </p>
        </section>
      </section>      
    </article>
    </PostContainer>
  );
}

export default Post;
