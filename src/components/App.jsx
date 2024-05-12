import userData from "../userData.json";
import Profile from "./Profile";

import friends from "../friends.json";
import FriendList from "./Friends";

import transactions from "../transactions.json";
import TransactionHistory from "./Transaction";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;