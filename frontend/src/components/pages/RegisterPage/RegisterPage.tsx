import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";

export default function RegisterPage() {
  const navigate = useNavigate();

  const showForm = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<{ username: string; password: string }>) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
        <label>Password : </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <>
      <h1>ลงทะเบียน</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </>
  );
}
