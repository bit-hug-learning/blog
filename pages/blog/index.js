import Post from 'components/Post/index';
import Aside from 'components/Aside/index';
import BlogContainer from './styles';
import useFetchData from 'hooks/useFetchData';

const url = 'posts?_embed=author';

const useFetchPosts = () => {
  const { data: posts } = useFetchData(url, []);
  return posts.map((post) => ({
    id: post.id,
    date: post.date,
    autor: post._embedded.author[0].name,
    avatar: post._embedded.author[0].avatar_urls['48'],
    copy: post.content.rendered,
    hashtags: ['CSS', 'HTML'],
    title: post.title.rendered,
    comments: [],
    likes: 2,
  }));
};

export default function Blog() {
  const posts = useFetchPosts();
  return (
    <BlogContainer>
      <main>
        <section>
          {posts?.map((post) => (
            <Post
              key={post.title}
              avatar={post.avatar}
              autor={post.autor}
              date={post.date}
              title={post.title}
              copy={post.copy}
              hashtags={post.hashtags}
              likes={post.likes}
              comments={post.comments.length}
            />
          ))}
        </section>
        <Aside></Aside>
      </main>
    </BlogContainer>
  );
}
