import useFetchData from 'hooks/useFetchData';
import Post from 'components/Post/index';
import Loader from 'components/Loader/index';

export default function PostDetail() {
  const { data: posts } = useFetchData('posts.json', []);

  // const poster = posts.filter(post => post.id == "0001")[0]
  
  // if(poster) {
    // console.log(poster);
    // console.log(poster.avatar);
    return(
      // <PostDetailContainer>
        <main>
          <section>
          <img src="" alt="" />
          <h1>hola</h1>
          <p>
            {/* hashtags */}
          </p>
          {posts
            .filter(post => post.id == "0001")
            .map(post => 
              <Post
              key={post.title}
              avatar={post.avatar}
              autor={post.autor}
              date={post.date}
              // title={post.title}
              // copy={post.copy}
              hashtags={post.hashtags}
              // likes={post.likes}
              // comments={post.comments.length}
            />
              )
          }
            

          
          
          </section>
          {/* Creator */}
        </main>
      // </PostDetailContainer>
    );
  // } else {
  //   return(
  //     <Loader></Loader>
  //   );
  // }

}