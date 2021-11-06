import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Signup() {
  const [error, setError] = useState();
  const history = useHistory();

  const [formState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "text":
        return {
          ...state,
          [action.field]: { ...state[action.field], value: action.value },
        };
      case "error":
        if (state[action.field]?.error === action.value) return state;
        return {
          ...state,
          [action.field]: { ...state[action.field], error: action.value },
        };
      default:
        throw Error("Unexpected action type");
    }
  }, {});

  const handleChange = (e) => {
    setError();
    dispatch({
      type: "text",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validate = useCallback(() => {
    const validateEmail = () => {
      if (!formState.email) return;
      const re = /\S+@\S+\.\S+/;
      const valid = re.test(formState.email.value);
      dispatch({
        type: "error",
        field: "email",
        value: valid ? "" : "Invalid email address",
      });
    };
    const validateName = () => {
      if (!formState.name) return;
      if (!formState.name.value.length) {
        dispatch({
          type: "error",
          field: "name",
          value: "You must have a nickname",
        });
      }
    };

    const validatePassword = () => {
      if (!formState.password) return;
      const password = formState.password.value;
      const valid =
        password?.length >= 8 && // 8 or more chars
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/.test(password); // contains a digit
      dispatch({
        type: "error",
        field: "password",
        value: valid
          ? ""
          : "Please enter a password at least 8 character and contain at least a uppercase, lowercase, and a special character.",
      });
    };

    const validateConfirmPassword = () => {
      if (!formState.password || !formState.confirmPassword) return;
      const valid =
        formState.password.value === formState.confirmPassword.value;
      dispatch({
        type: "error",
        field: "confirmPassword",
        value: valid ? "" : "Passwords do not match",
      });
    };

    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    return (
      !error &&
      formState.email &&
      formState.password?.value &&
      formState.password?.value === formState.confirmPassword?.value
    );
  }, [
    error,
    formState.name,
    formState.confirmPassword,
    formState.email,
    formState.password,
  ]);

  useEffect(() => {
    validate();
  }, [formState, validate]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 600,
        p: 3,
        m: 10,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" component="div" sx={{ p: 2 }}>
        Create an Account!
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {error && (
        <Typography
          color="error"
          variant="body2"
          sx={{ margin: "-10px 0 30px 10px" }}
        >
          {error}
        </Typography>
      )}
      <TextField
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={formState.firstName?.value ?? ""}
        error={Boolean(formState.firstName?.error)}
        helperText={formState.firstName?.error}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formState.lastName?.value ?? ""}
        error={Boolean(formState.lastName?.error)}
        helperText={formState.lastName?.error}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Email Address"
        name="email"
        onChange={handleChange}
        value={formState.email?.value ?? ""}
        error={Boolean(formState.email?.error)}
        helperText={formState.email?.error}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Password"
        name="password"
        onChange={handleChange}
        value={formState.password?.value ?? ""}
        error={Boolean(formState.password?.error)}
        helperText={formState.password?.error}
        type="password"
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        value={formState.confirmPassword?.value ?? ""}
        error={Boolean(formState.confirmPassword?.error)}
        helperText={formState.confirmPassword?.error}
        type="password"
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        style={{
          padding: "10px",
          marginBottom: "25px",
        }}
        onClick={async () => {
          if (!validate()) return;
          try {
            alert(formState.name.value);
            await axios.post("/users/register", {
              name: formState.name.value,
              email: formState.email.value,
              password: formState.password.value,
            });
            history.push("/login");
          } catch (err) {
            console.error(err);
            setError("Unable to register, please try again");
            return;
          }
        }}
      >
        Register
      </Button>
      <NavLink to="/login">I already have an account</NavLink>
    </Paper>
  );
}
