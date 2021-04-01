import { useRef, useState } from "react";
import axios from "../utils/axios";
import { useHistory } from "react-router-dom";
import { signupUrl } from "../utils/utils";

export const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const [err, setErr] = useState<string>("");

  //usehistory
  const { push } = useHistory();

  //form submit handler
  const onFormSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const passwordConfirm = confirmPassword?.current?.value;

    if (email === "" || password === "" || passwordConfirm === "") {
      setErr("All Fields Required!");
    } else if (password !== passwordConfirm) {
      setErr("Passwords didn't matched!");
    } else {
      setErr("");
      const userData = {
        email,
        password,
      };

      axios.post(signupUrl, userData).then((response) => {
        alert("Sign Up successfully!");
        push("/login");
      });

      console.log({ userData });
    }
  };

  return (
    <div className="login">
      <form onSubmit={onFormSubmitHandler}>
        <h2>Sign Up</h2>
        <input type="text" ref={emailRef} placeholder="email" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <input type="password" ref={confirmPassword} placeholder="password" />
        <p className="err-text">{err}</p>
        <button type="submit">Sign Up</button>
        <p>
          already have an account?{" "}
          <span>
            <h6 onClick={() => push("/login")}>Login</h6>
          </span>
        </p>
      </form>
    </div>
  );
};
