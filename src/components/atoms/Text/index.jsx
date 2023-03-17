import React from "react";

export const Text = (props) => {
  if (props.text === "logoName") {
    return (
      <div className="m2 fw-4 lsp fs-1 ">
        <p>YouTube</p>
      </div>
    );
  }
  if (props.super === "super") {
    return (
      <div className="fs-2 m3">
        <p>
          <sup>NG</sup>
        </p>
      </div>
    );
  }
  if (props.inter === "single") {
    return (
      <div className="fs-2">
        <p>30</p>
      </div>
    );
  }
  if (props.title === "all") {
    return <p>All</p>;
  }

  if (props.text === "music") {
    return <p>Music</p>;
  }

  if (props.title === "holy") {
    return <p>Jesus</p>;
  }

  if (props.text === "worship") {
    return <p>Compemporary Worship Music</p>;
  }

  if (props.text === "live") {
    return <p>Live</p>;
  }

  if (props.text === "mix") {
    return <p>Mixes</p>;
  }

  if (props.title === "new") {
    return <p>News</p>;
  }

  if (props.title === "chill") {
    return <p>Chill-out Music</p>;
  }

  if (props.title === "bless") {
    return <p>Blessings</p>;
  }

  if (props.title === "court") {
    return <p>Courts</p>;
  }

  if (props.title === "scripts") {
    return <p>JavaScript</p>;
  }

  if (props.title === "debate") {
    return <p>Debates</p>;
  }

  if (props.title === "science") {
    return <p>Computer Science</p>;
  }

  if (props.title === "jaba") {
    return <p>JabaWokies</p>;
  }

  if (props.title === "anime") {
    return <p>Naruto</p>;
  }

  if (props.side1 === "first") {
    return <p>Home</p>
  }
  if (props.side1 === "second") {
    return <p>Shorts</p>
  }
  if (props.side1 === "third") {
    return <p>Subscriptions</p>
  }
  if (props.side1 === "forth") {
    return <p>Library</p>
  }
  if (props.side1 === "fifth") {
    return <p>History</p>
  }
  if (props.side1 === "sixth") {
    return <p>Your videos</p>
  }
  if (props.side1 === "seventh") {
    return <p>Watch later</p>
  }
  if (props.side1 === "eight") {
    return <p>Downloads</p>
  }
  if (props.side1 === "nine") {
    return <p>Liked videos</p>
  }
 
  if (props.side1 === "ten") {
    return <p>Trending</p>
  }
  if (props.side1 === "eleven") {
    return <p>Music</p>
  }
  if (props.side1 === "twelve") {
    return <p>Gaming</p>
  }
  if (props.side1 === "thirteen") {
    return <p>News</p>
  }
  if (props.side1 === "forteen") {
    return <p>Sports</p>
  }
  if (props.side1 === "fifteen") {
    return <p>Settings</p>
  }
  if (props.side1 === "sixteen") {
    return <p>Report history</p>
  }
  if (props.side1 === "seventeen") {
    return <p>Help</p>
  }
  if (props.side1 === "eighteen") {
    return <p>Send feedback</p>
  }
  if (props.info === "letter1") {
    return (
      <div className="tit-info fw-4">
        <p>Time with God</p>
        <span>51K views - 1 month ago</span>
      </div>
    );
  }
};
