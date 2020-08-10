import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
        user: {},
        loged: false,
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "البريد الإلكتروني غير صالح";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "كلمة المرور يجب ألا تقل عن 8" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");

      try {
        const logingData = {
          email: this.state.email,
          password: this.state.password,
        };
        this.user = await axios.post(
          "http://localhost:4000/user/login",
          logingData
        );

        console.log(this.user.data.name);
        this.loged = true;
        this.props.history.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>تسجيل الدخول</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">
                <span>البريد الإلكتروني</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">
                <span>كلمة المرور</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="submit">
              {/* if the user logged in , then change the signIn button to be 
                  Link to that user profile */}
              {this.user ? (
                <Link to="#">{this.user.data.name}</Link>
              ) : (
                <Button type="submit" variant="warning ">
                  تسجيل
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
