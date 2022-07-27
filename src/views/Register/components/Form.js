function Form({ handleChange, handleSubmit, handleChecked, user, success, error }) {
    const disabled = !user.email || !user.password || !user.seniority 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleChange}
            required
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            value={user.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div class="mb-3">
          <label for="seniority" class="form-label">
            Seniority
          </label>
          <select
            onChange={handleChange}
            name="seniority"
            class="form-select"
            aria-label="Default select example"
            value={user.seniority}
          >
            <option value="">Open this select menu</option>
            <option value="jr">Junior</option>
            <option value="ssr">Semi-senior</option>
            <option value="sr">Senior</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Carga tu CV
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          ></input>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            name="newsletter"
            class="form-check-input"
            id="exampleCheck1"
            onChange={handleChecked}
            checked={user.newsletter}
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            I want to receive news and updates.
          </label>
        </div>
        <button disabled={disabled} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {success && (
        <div class="alert alert-success" role="alert">
          Tus datos fueron enviados correctamente!
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          Tuvimos un inconveniente procesando tus datos.
        </div>
      )}
    </>
  );
}

export default Form;
