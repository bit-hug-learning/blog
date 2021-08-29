import Post from 'components/Post/index';
import postInfo from 'utils/PostInfo';

export default function Blog() {
  return (
    <>       
      {postInfo.map(post => (
        <Post 
          image={post.image}
          autor={post.autor}
          date={post.date}
          title={post.title}
          copy={post.copy}
          hashtags={post.hashtags}
          likes={post.likes}
          comments={post.comments}  
        />
      ))}
    </>
  );
}
