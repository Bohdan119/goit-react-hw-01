import css from "./Profile/Profile.module.css"; 

const Profile = ({ username, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css["profile-box"]}>
        <img src={image} alt="User avatar" className={css["profile-img"]} />
        <p className={css["profile-name"]}>{username}</p>
        <div className={css["profile-direction"]}>
          <p className={css["profile-text"]}>@{tag}</p>
          <p className={css["profile-text"]}>{location}</p>
        </div>
      </div>
      <ul className={css["profile-list"]}>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Views</span>
          <span>{views}</span>
        </li>
        <li className={css["profile-item"]}>
          <span className={css["profile-trascription"]}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;


// // import css from "./Profile.module.css";

// const Profile = ({ username, tag, location, image, stats }) => {
//   const { followers, views, likes } = stats;
//   return (
//     <div className="profile">
//       <div className="profile-box">
//         <img src={image} alt="User avatar" className="profile-img" />
//         <p className="profile-name">{username}</p>
//         <div className="profile-direction">
//           <p className="profile-text">@{tag}</p>
//           <p className="profile-text">{location}</p>
//         </div>
//       </div>
//       <ul className="profile-list">
//         <li className="profile-item">
//           <span className="profile-trascription">Followers</span>
//           <span>{followers}</span>
//         </li>
//         <li className="profile-item">
//           <span className="profile-trascription">Views</span>
//           <span>{views}</span>
//         </li>
//         <li className="profile-item">
//           <span className="profile-trascription">Likes</span>
//           <span>{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Profile;




