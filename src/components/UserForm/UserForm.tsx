import React, { useState } from 'react';
import { User, UserMutation } from '../../types';
import { nanoid } from 'nanoid';

interface Props {
	onSubmit: (item: User) => void;
}

const initialState: UserMutation = {
	name: '',
	email: '',
	role: '',
	isActive: false,
};

const UserForm: React.FC<Props> = ({ onSubmit }) => {
	const [user, setUser] = useState<UserMutation>(initialState);

	const changeUser = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const changeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.checked,
		}));
	};

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		onSubmit({
			id: nanoid(),
			...user,
		});

		setUser(initialState);
	};

	return (
		<div className={'card'}>
			<form onSubmit={onFormSubmit}>
				<div className='card-header'>Create user</div>
				<div className='card-body'>
					<div className='mb-3'>
						<label htmlFor='name' className='form-label'>
							Username
						</label>
						<input
							type='text'
							className='form-control'
							id='name'
							name={'name'}
							value={user.name}
							onChange={changeUser}
							placeholder='Jack Daniels'
							required
						/>
					</div>

					<div className='mb-3'>
						<label htmlFor='email' className='form-label'>
							User mail
						</label>
						<input
							type='email'
							className='form-control'
							id='email'
							name={'email'}
							value={user.email}
							onChange={changeUser}
							placeholder='name@example.com'
							required
						/>
					</div>

					<div className='form-check form-switch mb-3'>
						<label className='form-check-label' htmlFor='isActive'>
							Active
						</label>
						<input
							type='checkbox'
							className='form-check-input'
							id='isActive'
							name={'isActive'}
							checked={user.isActive}
							onChange={changeIsActive}
							role='switch'
						/>
					</div>

					<select
						className='form-select'
						name={'role'}
						value={user.role}
						onChange={changeUser}
						required
					>
						<option defaultValue={''} value={''}>
							Select a role for the user
						</option>
						<option value='user'>User</option>
						<option value='editor'>Editor</option>
						<option value='admin'>Administrator</option>
					</select>

					<button className={'mt-3 btn btn-primary w-100'}>Create</button>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
