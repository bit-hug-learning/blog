import useFetchData from 'hooks/useFetchData';
import Post from 'components/Post/index';
import Loader from 'components/Loader/index';
import Chip from 'components/Chip/index';
import PostDetailContainer from './styles';
import Creator from 'components/Creator/index';
import Comment from 'components/Comment/index';

export default function PostDetail(props) {
  const { data: posts } = useFetchData('posts.json', []);
  const { data: creators } = useFetchData('creators.json', []);
  
  const poster = posts.filter(post => post.id == props.postDetailId)[0];

  const creatorPost = creators.filter(creator => {
    for(let i = 0; i < creator.posts.length; i ++) {
      if(creator.posts[i]  == poster.id) {
        return creator;
      };
    }
  })[0]
  const { data: hashtagschip } = useFetchData('hashtags.json', []);
 
  if(poster && creatorPost) {
    console.log(poster.comments)
    let h2 = [];
      const hc = hashtagschip.filter(hashc => {
        let flag = false;
        for(let i = 0; i < poster.hashtags.length; i ++) {
          if(hashc.text == poster.hashtags[i]) {
            h2.push(hashc.text)
            flag = true;
          }
        }
        //if a hashtag element is include in the poster.hastag then the flag turn true and is filtered.
        return flag  
      });
      
      // console.log(creatorPost.route)
      const user = {
        "avatar": "https://media-exp1.licdn.com/dms/image/C4E03AQEQXuvjMS8s6g/profile-displayphoto-shrink_800_800/0/1583943990404?e=1636588800&v=beta&t=wwmw7vWpHiYkHIUWrzWgE00DBihQ_YiHDJFg5GKbZIM",
        "name": "Kevin Malaver"
      }

      console.log(poster.comments.length);

      return(
        <PostDetailContainer>
          <section className="postdetail">
            <img className="postdetail__image" src={poster.image} alt={poster.title} />
            <h1 className="postdetail__title">{poster.title}</h1>
            <p className="postdetail__hashtag">
              {hc.map(h =>
                <Chip
                key={h.text}
                type="postdetail"
                text={h.text}
                colorBG={h.colorBG}
                ></Chip> )}
            </p>
            <Post
              key={poster.title}
              type="postdetail"
              avatar={poster.avatar}
              autor={poster.autor}
              date={poster.date}
              // title={post.title}
              copy={poster.copy}
              hashtags={poster.hashtags}
              likes={poster.likes}
              comments={poster.comments.length}
            >
            </Post>
            <p className="postdetail__text">Comentarios:</p>
            <Comment
              type="add-comment"
              avatar={user.avatar}
            ></Comment>
            {poster.comments.map(comment => 
              <Comment
              avatar={comment.avatar}
              name={comment.name}
              date={comment.date}
              copy={comment.copy}
              likes={comment.likes}
              comments={comment.comments}
              ></Comment>
            )}
            
          </section>
          <section className="creator">
          <Creator
            id={creatorPost.route}
            type="postdetail"
          ></Creator>
          </section>
  
        </PostDetailContainer>
      );
    } else {
        return(
          <Loader></Loader>
        );
      }
}