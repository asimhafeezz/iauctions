import { useRef, useState } from "react";
import axios from "../utils/axios";
import { signinUrl } from "../utils/utils";

import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [err, setErr] = useState<string>("");

  //usehistory
  const { push } = useHistory();

  //form submit handler
  const onFormSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (email === "" && password === "") {
      setErr("All Fields Required!");
    } else {
      setErr("");
      const userData = {
        email,
        password,
      };
      axios
        .post(signinUrl, userData)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.data))
          push("/listings");
        })
        .catch((err) => {
          console.log(err);
          alert(err.message)
        });
      console.log({ userData });
    }
  };

  return (
    <div className="login">
      <form onSubmit={onFormSubmitHandler}>
        <h2>Login</h2>
        <input type="text" ref={emailRef} placeholder="email" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <p className="err-text">{err}</p>
        <button type="submit">Login</button>
        <p>
          don't have an account?{" "}
          <span>
            <h6 onClick={() => push("/signup")}>Sign Up</h6>
          </span>
        </p>
      </form>
    </div>
  );
};
