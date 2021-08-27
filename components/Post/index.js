import React from 'react';
import img from '../../public/src/assets/icons/avatarGV.png';
// import img2 from 'https://i.postimg.cc/1tBszKCD/GSVIDAL-WEB-6.png';
import hashtags from '../../utils/hashtags'


function Post(props) {
  return(
    <article className="post">
      <img className="post__image" src={img} alt="" />
      <section className="post__body">
        <p className="post__autor">Gonzalo Vidal</p>
        <p className="post__date">Aug 11</p>
        <h2 className="post__title">Metodología BEM</h2>
        <p className="post__copy">Existen varias metodologías o 
            convenciones para nombrar a las ...
        </p>
        <div className="post__hashtags-container">
          {/* Estos datos salen con un map a un arreglo: */}
          <p className="post__hashtag">#CSS</p>
          <p className="post__hashtag">#HTML</p>
        </div>
      </section>
     
      <section className="post__cta">
        <p className="post__like">
          <span></span> 7 likes
        </p>
        <p className="post__comment">
          <span></span> 3 comments
        </p>
      </section>
    </article>
  );
}

export default Post;

// function Post(props) {
//   return(
//     <article>
//       <img src={creator.avatar} alt={creator.name} />
//       <p>{creator.name}</p>
//       <h2>Metodología BEM</h2>
//       <p>Existen varias metodologías o 
//           convenciones para nombrar a las ...
//       </p>
//       <p>{hashtags.css}</p>
//       <p>{hashtags.html}</p>

//     </article>
//   );
// }