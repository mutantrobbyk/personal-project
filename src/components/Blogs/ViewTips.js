import React, { Component } from "react";
import axios from "axios";
import "./ViewTips.css";

export default class ViewTips extends Component {
  state = {
    tips: [],
    category: "",
    title: "",
    body: "",
    url: ""
  };
  componentDidMount() {
      this.getTip()
  }
  getTip = () => {
      axios
      .get(`/tips/getAllTips/${this.props.match.params.tip_id}`)
      .then( res => {
          this.setState({
          tip_id: res.data[0].tip_id,
          category: res.data[0].category,
          title: res.data[0].title,
          body: res.data[0].body,
          url: res.data[0].url
      })
    })
  }
  goBack = () => {
    this.props.history.push("/techtips");
  };
  render() {
      let {category, title, body, url} = this.state
      return (
          <div className='outer-box'>
              <div className="inner-box">
                  <div className="third-box">
                      <div>
                          <img className='main-img-tech' src={url} alt=""/>
                      </div>
                      <div>
                        <h1>{title}</h1>
                        <h4>{category}</h4>
                      </div>
                      <button onClick={() => this.goBack()}>BACK TO SHOP</button>
                      <hr/>
                      <div>
                          <p>{body}</p>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}
