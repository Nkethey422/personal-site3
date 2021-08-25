export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Please enter your Name!";
  }

  if (!values.email) {
    errors.email = "Please enter an Email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid Email!";
  }

  if (!values.message) {
    errors.message = "Please enter a message!";
  }

  return errors;
}
