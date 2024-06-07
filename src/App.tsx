import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import { useState } from 'react';
import { User } from './types';
import { nanoid } from 'nanoid';

const App = () => {
	const [users, setUsers] = useState<User[]>([
		{
			id: nanoid(),
			name: 'Jack Daniels',
			email: 'jack@gmail.com',
			role: 'administrator',
			isActive: true,
		},
		{
			id: nanoid(),
			name: 'John Doe',
			email: 'jogn@gmail.com',
			role: 'editor',
			isActive: false,
		},
		{
			id: nanoid(),
			name: 'Tris',
			email: 'tris@gmail.com',
			role: 'user',
			isActive: true,
		},
	]);

	const addItem = (user: User) => {
		setUsers((prevState) => [...prevState, user]);
	};

	return (
		<div className={'container my-5'}>
			<div className='row row-cols-1 row-cols-md-2 justify-content-center'>
				<div className='col-12 col-md-6 col-lg-4 mb-4'>
					<UserForm onSubmit={addItem} />
				</div>
				<div className='col-12 col-md-6 col-lg-6 mb-4'>
					<Users users={users} />
				</div>
			</div>
		</div>
	);
};

export default App;
