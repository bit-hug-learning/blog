import Post from 'components/Post/index';
import Aside from 'components/Aside/index';
import SEO from 'components/SEO/index';
import { useEffect, useState } from 'react';
import getData from 'utils/getData';
import styled from 'styled-components';
import { transformPost } from 'utils/transforms';

export default function Blog() {
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getData('posts', {
          _embed: 'author',
          order: 'desc',
          orderBy: 'date',
          per_page: 10,
          offset: offset,
          categories: filters,
        });
        const posts = data.map(transformPost);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [offset, filters]);

  return (
    <BlogContainer>
      <SEO title="Blog Bithug" />
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

const BlogContainer = styled.div`
  main {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 50px;
  }
`;
