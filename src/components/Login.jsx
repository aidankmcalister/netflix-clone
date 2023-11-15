import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateLogin } from "../utils/validateLogin";
import { Button, Checkbox } from "@material-tailwind/react";
import netflixLogo from "../assets/imgs/netflixLogo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      dispatch(setUsername(values.username));
      navigate("/profileselect");
    }, 400);
  };

  return (
    <div className="w-[70%] md:max-w-[30rem] flex flex-col items-center">
      <img src={netflixLogo} alt="netflixLogo" className="w-16" />
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={validateLogin}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full">
            <div className="mb-7 mt-5">
              <Field
                type="text"
                name="username" // Updated field name to 'username'
                placeholder="Enter Username"
                className="p-3 rounded-lg w-full text-sm"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="absolute text-sm text-red-400"
              />
            </div>
            <div className="mb-7">
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-3 rounded-lg w-full text-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="absolute text-sm text-red-400"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-main-red mb-3"
            >
              Sign In
            </Button>
            <Checkbox color="red" label="Remember Me" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
