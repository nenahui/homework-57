const UserForm = () => {
  return (
    <div className={'card'}>
      <form>
        <div className="card-header">Create user</div>
        <div className="card-body">

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input type="text" className="form-control" id="name" placeholder="Jack Daniels" required/>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">User mail</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
          </div>

          <div className="form-check form-switch mb-3">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Active</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          </div>

          <select className="form-select" required>
            <option selected value={''}>Select a role for the user</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrator</option>
          </select>

          <button className={'mt-3 btn btn-primary w-100'}>Create</button>

        </div>
      </form>
    </div>
  );
};

export default UserForm;