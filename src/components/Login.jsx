import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateLogin } from "../utils/validateLogin";

const Login = () => {
  const handleSubmit = () => {
    (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    };
  };
  return (
    <div>
      <img src="" alt="netflixLogo" />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateLogin}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex border">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
