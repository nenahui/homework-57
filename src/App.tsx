import UserForm from './components/UserForm/UserForm';

const App = () => {
  return (
    <div className={'container-fluid my-5'}>
      <div className="row justify-content-center">
        <div className="col-4">
          <UserForm/>
        </div>
        <div className="col-4">
        </div>
      </div>
    </div>
  );
};

export default App;