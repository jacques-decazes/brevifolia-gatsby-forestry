import React, { useState } from "react"
import Lottie from "react-lottie"
import * as animationDataA from "./TwitterHeart.json"
import * as animationDataB from "./beating-heart.json"

import "./styles.scss"

/**
 * TransitionLoop, demonstrates the use of the eventListener Props.
 * NOTE: there appears to currently be a bug in either
 * react-lottie or lottie-web which results in a chance of the loop option not
 * taking effect accross different animations.
 */

const TransitionLoop = () => {
  const [isStopped, setIsStopped] = useState(true)
  const [isPauded, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [direction, setDirection] = useState(1)
  const [isLike, setIsLike] = useState(false)
  const [isTransitioned, setIsTransitioned] = useState(false)

  const transition = () => {
    setIsTransitioned(true)
  }

  const clickHandler = () => {
    setIsTransitioned(false)
  }

  const centerStyle = {
    display: "block",
    margin: "10px auto",
    textAlign: "center",
  }
  const defaultOptions = {
    animationData: !isTransitioned
      ? animationDataA.default
      : animationDataB.default,
    loop: true,
    autoplay: true,
  }

  return (
    <div className="test">
      <Lottie
        options={defaultOptions}
        width={"100%"}
        onClick={clickHandler}
        eventListeners={
          !isTransitioned
            ? [
                {
                  eventName: "loopComplete",
                  callback: () => {
                    transition()
                  },
                },
              ]
            : []
        }
      />
      <button style={centerStyle} onClick={clickHandler}>
        restart
      </button>
    </div>
  )
}

export default TransitionLoop
