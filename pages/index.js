import Example from 'components/Example/index';
import SEO from 'components/SEO';
import Post from 'components/Post/index';
import postInfo from 'utils/PostInfo';


export default function Home() {
  return (
    <>
      <SEO title="Bithug" description="Bithug description" />
      <main>hello world</main>
      {/* <Example /> */}
      
      {postInfo.map(post => (
        <Post 
          image={post.image}
          autor={post.autor}
          date={post.date}
          title={post.title}
          copy={post.copy}
          hashtags={post.hashtags}
          likes={post.likes}
          comments={post.comments}  
        />
        ))}

    </>
  );
}
