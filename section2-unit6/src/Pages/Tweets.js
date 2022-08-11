// TODO : useState를 react로 부터 import 합니다.
import React, { useState, useRef } from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";

const Tweets = () => {
  const dataId = useRef(10);
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [tweets, setTweets] = useState(dummyTweets);
  const [filteredTweets, setFilteredTweets] = useState(dummyTweets);

  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.

  const handleFiltered = (event) => {
    if (event.target.value === "default") {
      return setTweets(filteredTweets);
    }
    const filtered = tweets.filter(
      (tweet) => tweet.username === event.target.value
    );
    setTweets(filtered);

    console.log(event.target.value);
  };

  const handleButtonClick = () => {
    const tweet = {
      id: dataId.current,
      username: input,
      picture: `https://randomuser.me/api/portraits/women/2.jpg`,
      content: textarea,
      createdAt: new Date().toLocaleDateString("ko-KR"),
      updatedAt: new Date().toLocaleDateString("ko-KR"),
    };
    dataId.current += 1;
    const newtweet = [tweet, ...tweets];
    setTweets(newtweet);
    setFilteredTweets(newtweet);
  };

  const handleChangeUser = (event) => {
    setInput(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {`total: ${dummyTweets.length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                영웅
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tweet__selectUser">
        <select onChange={handleFiltered}>
          <option value="default">--Please choose an option--</option>
          {tweets.map((tweet) => (
            <option value={tweet.username} key={tweet.id}>
              {tweet.username}
            </option>
          ))}
        </select>
      </div>
      <ul className="tweets">
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
