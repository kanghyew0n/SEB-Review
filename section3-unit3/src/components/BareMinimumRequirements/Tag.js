import { useState } from "react";
import styled from "styled-components";

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #4000c7;
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #4000c7;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    background-color: transparent;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

export const Tag = () => {
  const initialTags = ["CodeStates", "kimcoding"];

  const [tags, setTags] = useState(initialTags);
  const [text, setText] = useState("");

  const removeTags = (e) => {
    const eId = e.target.id;
    const removetag = tags.filter((el) => el !== tags[eId]);
    setTags(removetag);
  };

  const addTags = (event) => {
    if (event.target.value.trim() === "") {
      return;
    }
    if (tags.includes(event.target.value)) {
      return;
    }
    if (event.key === "Enter") {
      setTags([...tags, event.target.value]);
      setText("");
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={removeTags} id={index}>
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={addTags}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};
