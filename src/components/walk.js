import React from 'react';

export default class Walk extends React.Component {
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "/requestAnimFrame.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "/movement.js";
    script2.async = true;
    document.body.appendChild(script2);
  }
  render() {
    return(
      <div style ={{margin: 0,padding: 0, height: 0, width: 0}} />
    )
  }
}

