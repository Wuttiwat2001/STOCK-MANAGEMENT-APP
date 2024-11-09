import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              สมัครใหม่
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              onChange={handleChange}
              value={values.username}
              autoComplete="email"
              autoFocus
            ></TextField>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            ></TextField>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => navigate(-1)}
              type="button"
              variant="outlined"
              color="primary"
              fullWidth
            >
              ยกเลิก
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
            >
              ลงทะเบียน
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  };

  return (
    <>
      <Box sx={{}}>
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
      </Box>
    </>
  );
}
