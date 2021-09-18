import Creator from 'components/Creator/index';
import { useRouter } from 'next/router';

export default function ProfileId() {
  const router = useRouter();
  const { profileId } = router.query;

  return (
    <ProfileContainer>
      <Creator id={profileId}></Creator>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div``;
