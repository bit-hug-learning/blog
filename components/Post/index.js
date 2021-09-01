import React from 'react';
import PostContainer from 'components/Post/styles';

function Post(props) {
  return(
    <PostContainer>
    <article className={`post ${props.type == "secondary" && "secondary"}`}>
      <a href="">
        <img className="post__avatar" src={props.avatar} alt="avatar" width="38" height="38"/>
      </a>
      <section className={`post__body ${props.type == "secondary" && "secondary"}`}>
        <a href="" className="post__autor">{props.autor}</a>
        <p className="post__date">{props.date}</p>
        <h2 className="post__title"><a href="">{props.title}</a></h2>
        <p className="post__copy">{props.copy}
        </p>
        <div className="post__hashtags-container">
          {props.hashtags.map(hash => <p key={hash} className="post__hashtag">{hash}</p>)}
        </div>

        <section className="post__cta">
          <p className={`post__like ${props.type == "secondary" && "secondary"}`}>
            <span className="post__like-img"></span> {props.likes} likes
          </p>
          <p className={`post__comment ${props.type == "secondary" && "secondary"}`}>
            <span className="post__comment-img"></span> {props.comments} comments
          </p>
        </section>
      </section>      
    </article>
    </PostContainer>
  );
}

export default Post;
