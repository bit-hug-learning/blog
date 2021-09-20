import React, { useEffect, useState } from 'react';
import Post from '../Post';
import AsideContainer from './styles';
import Chip from 'components/Chip/index';
import { transformHashtag, transformPost } from 'utils/transforms';
import getData from 'utils/getData';

function Aside() {
  const [{ posts, hashtags }, setData] = useState({
    posts: [],
    hashtags: [],
  });

  useEffect(() => {
    const getPostsAndData = async () => {
      try {
        const [posts, hashtags] = await Promise.all([
          getData('posts', {
            per_page: 2,
            order: 'desc',
            orderBy: 'relevance',
          }),
          getData('categories'),
        ]);

        setData({
          posts: posts?.map(transformPost),
          hashtags: hashtags?.map(transformHashtag),
        });
      } catch (e) {
        console.error(e);
      }
    };
    getPostsAndData();
  }, []);

  return (
    <AsideContainer>
      <aside className="aside">
        <section className="aside__section aside__section--filter">
          <p className="aside__subtitle">Filter by:</p>
          {hashtags.map((hashtag) => (
            <Chip
              key={hashtag.text}
              text={hashtag.text}
              colorBG={hashtag.colorBG}
            ></Chip>
          ))}
        </section>
        <section className="aside__section">
          <p className="aside__subtitle">Most popular articles:</p>
          {posts.map((post) => (
            <Post
              key={post.title}
              type="secondary"
              avatar={post.avatar}
              author={post.author}
              date={post.date}
              title={post.title}
              copy={post.copy}
              hashtags={post.hashtags}
              likes={post.likes}
              comments={post.comments.length}
            />
          ))}
        </section>
      </aside>
    </AsideContainer>
  );
}

export default Aside;
