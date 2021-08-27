import Example from 'components/Example/index';
import SEO from 'components/SEO';
import Post from 'components/Post/index';
import PostContainer from 'components/Post/styles';

export default function Home() {
  return (
    <>
      <SEO title="Bithug" description="Bithug description" />
      <main>hello world</main>
      {/* <Example /> */}
      <PostContainer>
        <Post />
      </PostContainer>
    </>
  );
}
