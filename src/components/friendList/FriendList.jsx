import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendList.module.css';
export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}

FriendsList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.object
  ),
};


