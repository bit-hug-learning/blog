import React, { useEffect, useState } from 'react';
import Post from '../Post';
import postInfo from 'utils/PostInfo';
import AsideContainer from './styles';
import Chip from 'components/Chip/index';
import useFetchData from 'hooks/useFetchData';

function Aside() {
  const postSorted = postInfo.sort((a, b) => b.likes - a.likes);
  const postMostPopular = postSorted[0];
  const { data: hashtags } = useFetchData('hashtags.json', []);

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
          <Post
            key={postMostPopular.title}
            type="secondary"
            image={postMostPopular.image}
            autor={postMostPopular.autor}
            date={postMostPopular.date}
            title={postMostPopular.title}
            copy={postMostPopular.copy}
            hashtags={postMostPopular.hashtags}
            likes={postMostPopular.likes}
            comments={postMostPopular.comments}
          />
        </section>
      </aside>
    </AsideContainer>
  );
}

export default Aside;
