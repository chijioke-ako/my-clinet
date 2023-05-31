import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BackToTop(showBelow) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleSrcoll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleSrcoll);
      return () => window.removeEventListener(`scroll`, handleSrcoll);
    }
  }, []);

  const handClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div>
      <Link onClick={handClick}>back to top</Link>
    </div>
  );
}

export default BackToTop;
