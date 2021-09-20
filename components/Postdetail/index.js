import useFetchData from 'hooks/useFetchData';
import Post from 'components/Post/index';
import Loader from 'components/Loader/index';
import Chip from 'components/Chip/index';
import PostDetailContainer from './styles';
import Creator from 'components/Creator/index';
import Comment from 'components/Comment/index';
import { useEffect } from 'react';
import getData from 'utils/getData';
import { transformCreator, transformPost } from 'utils/transforms';
import { useState } from 'react';

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const hc = [];

  console.log(props);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await getData(`posts/${props.postDetailId}`);
        const author = await getData(`users/${data.author}`);
        const post = transformPost(data);
        post.creator = transformCreator(author);
        setPost(post);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [props.postDetailId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <PostDetailContainer>
      <section className="postdetail">
        <img className="postdetail__image" src={post.image} alt={post.title} />
        <h1 className="postdetail__title">{post.title}</h1>
        <p className="postdetail__hashtag">
          {hc.map((h) => (
            <Chip
              key={h.text}
              type="postdetail"
              text={h.text}
              colorBG={h.colorBG}
            ></Chip>
          ))}
        </p>
        <Post
          key={post.title}
          type="postdetail"
          avatar={post.avatar}
          author={post.author}
          date={post.date}
          // title={post.title}
          copy={post.copy}
          hashtags={post.hashtags}
          likes={post.likes}
          comments={post.comments.length}
        ></Post>
        <p className="postdetail__text">Comentarios:</p>
        <Comment type="add-comment" avatar={post.avatar}></Comment>
        {post.comments.map((comment) => (
          <Comment
            key={comment.id}
            avatar={comment.avatar}
            name={comment.name}
            date={comment.date}
            copy={comment.copy}
            likes={comment.likes}
            comments={comment.comments}
          ></Comment>
        ))}
      </section>
      <section className="creator">
        <Creator creator={post.creator} type="postdetail"></Creator>
      </section>
    </PostDetailContainer>
  );
}
