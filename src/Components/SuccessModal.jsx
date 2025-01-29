import PropTypes from "prop-types";
const SuccessModal = ({ onCloseModal }) => {
  return (
    <div className="modalWrapper">
      <div className="closeButton">
        <i className="fa-solid fa-circle-xmark" onClick={onCloseModal}></i>
      </div>
      <i className="fa-solid fa-circle-check"></i>
      <h1>Successful!</h1>
      <p>Thank you for registering</p>
    </div>
  );
};
SuccessModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
export default SuccessModal;
