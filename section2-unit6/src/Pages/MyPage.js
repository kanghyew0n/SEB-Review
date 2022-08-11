import React from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./MyPage.css";
import dummyTweets from "../static/dummyData";

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(
    (tweet) => tweet.username === "parkhacker"
  );

  console.log(filteredTweets);
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets.map((tweet) => tweet.picture)} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets.map((tweet) => tweet.username)} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
