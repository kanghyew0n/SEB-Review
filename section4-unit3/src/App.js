import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import Loading from "./component/Loading";

/* react.lazy()와 suspense를 사용해 보세요. */
const Home = lazy(() => import("./Home"));
const CreateBlog = lazy(() => import("./blogComponent/CreateBlog"));
const BlogDetails = lazy(() => import("./blogComponent/BlogDetail"));
const NotFound = lazy(() => import("./component/NotFound"));

function App() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isChange, setIsChange] = useState(false);

  /* get 메소드를 통해 데이터를 받아오는 useEffect hook은 컴포넌트 내 여기저기 존재하고 있습니다. */
  /* 해당 hook은 반복이 되는 부분이 있으므로 어떻게 custom hook으로 만들 수 있을 지 고민해봅시다. */
  /* util 폴더 내에 존재하는 useFetch에 여러분의 custom hook을 작성해주세요. */
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
      console.log("here");
    }, 0);
  }, [isChange]);

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <div className="app">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home blogs={blogs} isPending={isPending} />}
              />
              <Route
                path="/create"
                element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />}
              />
              <Route
                path="/blogs/:id"
                element={
                  <BlogDetails
                    blogs={blogs}
                    setBlogs={setBlogs}
                    setIsChange={setIsChange}
                    isChange={isChange}
                  />
                }
              />
              <Route path="/blogs/:id" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
