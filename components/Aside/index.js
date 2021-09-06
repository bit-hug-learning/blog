import React from 'react';
import Post from '../Post';
import AsideContainer from './styles';
import Chip from 'components/Chip/index';
import useFetchData from 'hooks/useFetchData';

function Aside() {
  const { data: hashtags } = useFetchData('hashtags.json', []);
  const { data: posts } = useFetchData('posts.json', []);

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
          {posts
            .sort((a, b) => b.likes - a.likes)
            .filter(post => post == posts[0])
            .map(post => (
                  <Post
                  key={post.title}
                  type="secondary"
                  avatar={post.avatar}
                  autor={post.autor}
                  date={post.date}
                  title={post.title}
                  copy={post.copy}
                  hashtags={post.hashtags}
                  likes={post.likes}
                  comments={post.comments.length}
                />
              ))
          }
        </section>
      </aside>
    </AsideContainer>
  );
}

export default Aside;
