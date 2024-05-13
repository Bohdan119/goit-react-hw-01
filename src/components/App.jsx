import userData from "../components/Profile/userData.json";
import Profile from "./Profile/Profile";

import friends from "../components/Friends/friends.json";
import FriendList from "./Friends/Friends";

import transactions from "../components/Transaction/transactions.json";
import TransactionHistory from "./Transaction/Transaction";

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