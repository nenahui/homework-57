import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App = () => {
  return (
    <div className={'container-fluid my-5'}>
      <div className="row justify-content-center">
        <div className="col-4">
          <UserForm/>
        </div>
        <div className="col-6">
          <Users/>
        </div>
      </div>
    </div>
  );
};

export default App;