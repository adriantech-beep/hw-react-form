import { useState } from "react";
import Hero from "./Components/Hero";
import SuccessModal from "./Components/SuccessModal";
import Form from "./Components/Form";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  function handleCloseModal() {
    setIsSubmitted(false);
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="container">
      <Hero />
      {isSubmitted && <SuccessModal onCloseModal={handleCloseModal} />}
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default App;
