import React from 'react';

function Tweets() {
  return (
    <>
      <a
        className="twitter-timeline"
        href="https://twitter.com/chijiok22205194?ref_src=twsrc%5Etfw"
      >
        Tweets by chijiok22205194
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </>
  );
}

export default Tweets;
