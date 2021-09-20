import { useRouter } from 'next/router';
import PostDetail from '../../components/Postdetail/index';

export default function PostDetailId() {
  const router = useRouter();
  const { postDetailId } = router.query;
  console.log(postDetailId);
  if (!postDetailId) {
    return <div>Post Detail ID is not found</div>;
  }
  return <PostDetail postDetailId={postDetailId} />;
}
