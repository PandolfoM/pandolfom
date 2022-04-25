import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

function Scroll() {
  const [scrollBtn, setBtn] = useState(false);

  // function scrollToTop() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     setBtn(true);
  //   } else {
  //     setBtn(false);
  //   }
  // }

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY >= 20 && setBtn(true)
      window.scrollY < 20 && setBtn(false)
    }
  })

  return (
    <>
      {scrollBtn === true && (
        <Button className="scrollTop">
          <FontAwesomeIcon
            icon={faAngleUp}
            size="3x"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          />
        </Button>
      )}
    </>
  );
}

export default Scroll;
