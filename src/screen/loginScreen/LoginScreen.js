import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./loginScreen.scss";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handelLogin = () => {
    dispatch(login());
  };

  const history = useNavigate();

  useEffect(() => {
    if (accessToken) {
      history("/");
    }
  }, [accessToken, history]);
  return (
    <div className="login">
      <div className="login_container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handelLogin}>Login With Google</button>
        <p>This Project is made using TOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
