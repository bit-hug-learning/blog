import Creator from "components/Creator/index";
// import ProfileId from "./[profileId]";
import ProfileContainer from "./styles";

export default function Profile(props) {
  return(
    <ProfileContainer>
      <Creator 
        id={props.profileId}>
      </Creator>
    </ProfileContainer>
  );
}