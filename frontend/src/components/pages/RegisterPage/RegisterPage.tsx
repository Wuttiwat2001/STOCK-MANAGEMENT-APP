import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { User } from "../../../types/user.types";

export default function RegisterPage() {
  const navigate = useNavigate();
  const classes = {
    root: { display: "flex", justifyContent: "center" },
    buttons: { marginTop: 2 },
  };

  const initialValues:User = {
    username: "",
    password: "",
  }

  const showForm = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<User>) => {
    return (
      <form onSubmit={handleSubmit}>
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

        <Stack spacing={2} direction="row" sx={classes.buttons}>
          <Button
            onClick={() => navigate("/login")}
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
        </Stack>
      </form>
    );
  };

  return (
    <>
      <Box sx={classes.root}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values));
                setTimeout(() => {
                  setSubmitting(false);
                }, 1000);
              }}
              initialValues={initialValues}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
