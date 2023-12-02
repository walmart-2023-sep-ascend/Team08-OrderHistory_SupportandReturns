import React from 'react'
import classes from '../layouts/Overlay.module.css'
function Background(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
    </div>
  )
}

export default Background;
