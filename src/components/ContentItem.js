import React from 'react'

export default class Kant extends React.Component{
  render(){
    return(
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "#fff", borderStyle: "solid", borderColor: "black"}}>
      <div style={{width:"75%", margin: 20, display: "flex", justifyContent: "space-between"}}>
      <h2 className="contentTitle"> {this.props.title} </h2>
      <div style={{width: "58%", marginTop: 60, marginBottom: 60}}>
       <div className="contentTask"> {this.props.task} </div>
       {this.props.numberLinks < 2 && <div className="contentTask contentLink"> <a target="_blank" href={this.props.src}> {this.props.link} </a> </div>}
       {this.props.numberLinks == 2 && <div className="contentTask contentLink"> <a target="_blank" href={this.props.src}> {this.props.link} </a> <br/> <a target="_blank" href={this.props.src2}> {this.props.link2} </a> </div>}
       <div className="contentDiscussion">
       <strong> Your discussion task: </strong>
       <div>{this.props.discussion} </div>
       </div>
       <br/>
       <div className="contentExplanation">
        <i>Explanation:</i> <br/>
        {this.props.explanation}
       </div>
      </div>
      </div>
      </div>
    )}
  }
