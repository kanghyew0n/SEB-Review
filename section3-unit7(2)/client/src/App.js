import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import { useEffect, useState } from "react";
import axios from "axios";

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const authHandler = () => {
    // TODO: 초기 화면 렌더링시, 서버에 유저 정보를 요청하여 Login 또는 Mypage가 렌더링되도록 구현합니다.
    return axios
      .get("https://localhost:4000/userinfo")
      .then((res) => {
        // 인증에 성공했다면 응답으로 받은 데이터가 Mypage에 렌더링되도록 State를 변경하세요.
        setUserInfo(res.data);
        setIsLogin(true);
      })
      .catch((err) => {
        // 인증에 실패했다면 그에 대한 에러 핸들링을 구현하세요.
        console.log(err.code);
      });
  };

  useEffect(() => {
    // 컴포넌트 생성 시 아래 함수가 실행됩니다.
    authHandler();
  }, []);

  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <Mypage userInfo={userInfo} setIsLogin={setIsLogin} />
              ) : (
                <Login setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
