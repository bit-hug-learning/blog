import Post from 'components/Post/index';
import postInfo from 'utils/PostInfo';
import Aside from 'components/Aside/index';
import BlogContainer from './styles';

export default function Blog() {
  return (
    <BlogContainer>
      <main>
        <section>
        {postInfo.map(post => (
          <Post 
            key={post.title}
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
        </section>

        <Aside>

        </Aside>
      </main>   
    </BlogContainer>
  );
}
