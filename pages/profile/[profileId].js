import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const { profileId } = router.query;

  return <p>Post: {profileId}</p>;
}