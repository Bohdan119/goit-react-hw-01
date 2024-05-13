import css from './Friends.module.css'; 

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}> 
      {friends.map((friend) => (
        <li key={friend.id} className={css['friends-item']}> 
          <div>
            <img src={friend.avatar} alt="avatar" width="48" />
            <p className={css['profile-trascription']}>{friend.name}</p> 
            <p className={css['friend-paragraph']}>
              {friend.isOnline ? (
                <span className={css['online']}>Online</span> 
              ) : (
                <span className={css['offline']}>Offline</span> 
              )}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;



//  КОД ВИЩЕ З ПІДКЛЮЧЕНИМИ СТИЛЯМИ ДО КОМПОНЕНТА А НИЖЧЕ КОД ДОБРИЙ ТІЛЬКИ СТИЛІ ТРЕБА ПІДКЛЮЧАТИ ОДНИМ ФАЙЛОМ ДЛЯ ВСІХ КОМП.
// const FriendList = ({ friends }) => {
//   return (
//     <ul className="friends-list">
//       {friends.map((friend) => (
//         <li key={friend.id} className="friends-item">
//           <div>
//             <img src={friend.avatar} alt="avatar" width="48" />
//             <p className="profile-trascription">{friend.name}</p>
//             <p className="friend-paragraph">
//               {friend.isOnline ? (
//                 <span className="online">Online</span>
//               ) : (
//                 <span className="offline">Offline</span>
//               )}
//             </p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FriendList;



