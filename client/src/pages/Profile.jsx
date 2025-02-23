import './Profile.scss';
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [userInfo] = useOutletContext();

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={userInfo.image} alt="Avatar" className="profile-avatar" />
        <h2>{userInfo.username}</h2>
        <p>{userInfo.email}</p>
      </div>
      <div className="profile-bio">
        <h3>Bio</h3>
        <p>{userInfo.bio}</p>
      </div>
    </div>
  );
};

export default Profile;