import { useRouter } from 'next/router';
import Profile from './index';

export default function ProfileId() {
  const router = useRouter();
  const { profileId } = router.query;

  return(
    <Profile
      profileId={profileId}
    ></Profile>);
}