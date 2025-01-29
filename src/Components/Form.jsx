import Button from "./Button";
import PropTypes from "prop-types";

const Form = ({ formData, handleChange, handleSubmit, errors }) => {
  return (
    <form className="formWrapper" onSubmit={handleSubmit}>
      <div className="formTitle">
        <h1>Create an account</h1>
        <p>Lets get started with your 30 days free trial</p>
      </div>

      <div className="form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        ></input>
        {errors.username && (
          <span className="error-message">{errors.username}</span>
        )}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        {errors.email && <span className="error-message">{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        ></input>
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
        ></input>
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>
      <div className="action">
        <Button type="submit">Create Account</Button>
        <Button type="button">
          <i className="fa-brands fa-google"></i> Sign up with Google
        </Button>
      </div>
      <div className="footer">
        <h1>Already have an account?</h1>
        <p>Sign in</p>
      </div>
    </form>
  );
};

Form.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Form;
