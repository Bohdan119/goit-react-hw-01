import Profile from "./Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import FriendList from "./Friends";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;