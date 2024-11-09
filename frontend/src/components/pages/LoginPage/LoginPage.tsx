import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import { User } from "../../../types/user.types";

export default function LoginPage() {
  const navigate = useNavigate();
  const classes = {
    root: { display: "flex", justifyContent: "center" },
    buttons: { marginTop: 2 },
  };

  const initialValues: User = {
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
          เข้าสู่ระบบ
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="ชื่อบัญชีผู้ใช้"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        ></TextField>

        <TextField
          size="small"
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="รหัสผ่าน"
          onChange={handleChange}
          value={values.password}
        ></TextField>

        <Stack spacing={2} direction="row" sx={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
            startIcon={<LoginIcon />}
          >
            เข้าสู่ระบบ
          </Button>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
            เพิ่งเคยเข้ามาใน ระบบจัดการสินค้า ใช่หรือไม่
          </Typography>
          <Typography
            sx={{ color: "primary.main", marginLeft: 1, cursor: "pointer" }}
            variant="caption"
            onClick={() => navigate("/register")}
          >
            สมัครใหม่?
          </Typography>
        </Box>
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
