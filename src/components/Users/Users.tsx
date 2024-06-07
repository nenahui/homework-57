import React from 'react';
import UserItem from './UserItem';
import { User } from '../../types';

interface Props {
	users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
	return (
		<div className={'card'}>
			<div className={'card-header'}>A list of users</div>
			<div className={'card-body row'}>
				{users.map((user: User) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		</div>
	);
};

export default Users;
