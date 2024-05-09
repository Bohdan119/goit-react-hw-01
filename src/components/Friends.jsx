const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <div>
            <img src={friend.avatar} alt="avatar" width="48" />
            <p>{friend.name}</p>
            <p>{friend.isOnline ? "Online" : "Offline"}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
