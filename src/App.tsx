import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';
import {nanoid} from 'nanoid';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: nanoid(), name: 'Jack Daniels', email: 'jack@gmail.com', role: 'administrator', isActive: true},
    {id: nanoid(), name: 'John Doe', email: 'jogn@gmail.com', role: 'editor', isActive: false},
    {id: nanoid(), name: 'Tris', email: 'tris@gmail.com', role: 'user', isActive: true},
  ]);

  return (
    <div className={'container-fluid my-5'}>
      <div className="row justify-content-center">
        <div className="col-4">
          <UserForm/>
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;