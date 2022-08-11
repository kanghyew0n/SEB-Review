import React from "react";
import "./App.css";
import "./global-style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// TODO - react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러오세요.

import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
import MyPage from "./Pages/MyPage";
import About from "./Pages/About";
// TODO - import문을 이용하여 MyPage, About 컴포넌트를 불러오세요.

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <main>
            <Sidebar />
            <section className="features">
              <Routes>
                <Route path="/" element={<Tweets />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
              </Routes>
              <Tweets />
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
