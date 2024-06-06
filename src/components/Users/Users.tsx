import UserItem from './UserItem';

const Users = () => {
  return (
    <div className={'card'}>
      <div className={'card-header'}>A list of users</div>
      <div className={'card-body row'}>
        <UserItem/>
        <UserItem/>
        <UserItem/>
        <UserItem/>
      </div>
    </div>
  );
};

export default Users;