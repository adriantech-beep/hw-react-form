import PropTypes from "prop-types";

const Button = ({ children, type }) => {
  return (
    <button type={type} className="submit-btn">
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
