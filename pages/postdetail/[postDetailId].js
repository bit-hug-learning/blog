import { useRouter } from 'next/router';
import PostDetail from '../../components/Postdetail/index';

export default function PostDetailId() {
  const router = useRouter();
  const { postDetailId } = router.query;
  return <PostDetail postDetailId={postDetailId} />;
}
