import React, { Component } from "react";
import axios from "axios";
import "./ViewTips.css";

export default class ViewTips extends Component {
  state = {
    tips: [],
    category: "",
    title: "",
    body: "",
    url: "",
    images: ''
  };
  componentDidMount() {
      this.getTip()
      this.getAdditionalPics()
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
  getAdditionalPics = () => {
    // console.log(this.state.images)
    axios.get(`/tips/getAllTips/pics/${this.props.match.params.tip_id}`).then(res => {
        this.setState({
            images: res.data
        })
    })
}
  goBack = () => {
    this.props.history.push("/techtips");
  };
  render() {
      let {category, title, body, url, images} = this.state
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
                      <br/>
                      <button onClick={() => this.goBack()}>BACK TO SHOP</button>
                      <hr/>
                      <div>
                      <section dangerouslySetInnerHTML={{ __html: body }} />
                      </div>
                      <br/>
                      <div className='tips-images-outer-box'>
                        {images ? (
                          images.map(el => {
                            return (
                              <div className='view-tips-images'>
                                <img key={el.id} src={el.image} alt=""/>
                              </div>
                            )
                          })
                        ): null}
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}
