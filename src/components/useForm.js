import { useState } from "react";
import validate from "./validateInfo.js";

const useForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setSubmitting(true);
  };
  return { handleChange, values, handleSubmit, errors, submitting };
};

export default useForm;
