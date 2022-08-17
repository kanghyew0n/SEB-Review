import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("김코딩");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body,
        author,
        likes: 0,
      }),
    })
      .then((response) => response.json())
      .then((data) => setBlogs([data, ...blogs]));
    navigate(`/`);

    console.log(e.type);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>제목</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요."
        />
        <label>내용</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="내용을 입력해주세요."
        ></textarea>
        <label>작성자</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="kimcoding">김코딩</option>
          <option value="parkhacker">박해커</option>
        </select>
        <button>등록</button>
      </form>
    </div>
  );
};

export default CreateBlog;
