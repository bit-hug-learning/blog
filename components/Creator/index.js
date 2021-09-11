import React from 'react';
import useFetchData from 'hooks/useFetchData';
import CreatorContainer from './styles';
import Post from 'components/Post/index';
import Loader from 'components/Loader/index';

function Creator(props) {
  const { data: posts } = useFetchData('posts.json', []);
  const { data: creators } = useFetchData('creators.json', []);
  const creator = creators.filter(creator => creator.route === props.id)[0];

  if (creator) {
    return (
      <CreatorContainer>
        <section className={`creator ${props.type == "postdetail" && "postdetail"}`}>
          <div className="creator__info">
            <img className="creator__avatar" src={creator.avatar} alt={creator.autor} />
            <h1 className="creator__autor">{creator.autor}</h1>
            <p className="creator__description">{creator.description}</p>
            <h2 className="creator__header creator__header--location">Locación:</h2>
            <p className="creator__location">{creator.location}</p>
            <h2 className="creator__header creator__header--job">Trabajo:</h2>
            <p className="creator__job">{creator.job}</p>
            <ul className="creator__contact">
              {creator.contact.map(item => 
                <li className="creator__contact-item" key={item.url}>
                  <a href={item.url} className="creator__contact-link" >
                    <img className="creator__contact-logo" src={item.logo} alt={item.name}  />
                  </a>
                </li>
              )}
            </ul>
            <p>Últimos artículos de Gonzalo en Bit Blog:</p>
          </div>
          {posts
            .filter(post => post.autor === creator.autor)
            .map(post =>
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
              ></Post>
            )
          }
        </section>
      </CreatorContainer>
    );
  } else {
      return (
        <Loader></Loader>
      );
    }
}

export default Creator;