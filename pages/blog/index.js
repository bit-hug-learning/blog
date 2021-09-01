import Post from 'components/Post/index';
import Aside from 'components/Aside/index';
import BlogContainer from './styles';
import useFetchData from 'hooks/useFetchData';

export default function Blog() {
  const { data: posts } = useFetchData('posts.json', []);
  return (
    <BlogContainer>
      <main>
        <section>
          {posts.map((post) => (
            <Post
              key={post.title}
              avatar={post.avatar}
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
        <Aside></Aside>
      </main>
    </BlogContainer>
  );
}
