import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {

  const role = user.role === 'admin' ? 'Administrator' : user.role === 'editor' ? 'Editor' : 'User';

  return (
    <div className="col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text m-0">Email: {user.email}</p>
          <p className="card-text m-0">Active: {user.isActive ? 'Yes' : 'No'}</p>
          <p className="card-text m-0">Role: {role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;