import React, { Component } from "react";
import "./About.css";
import axios from "axios";

export default class About extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    text: "",
    message: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  sendEmail = (body) => {
    // const {name, email, subject, text} = this.state
    axios.post("/api/email", body).then((res) => {
      this.setState({
        name: "",
        email: "",
        subject: "",
        text: "",
      });
    });
  };
  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="About-outer">
        <div className="About">
          <div className="about-pics">
            <img
              className="one"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1570478297/lchkfu4bspgu65uf4o4u.jpg"
              alt="dirtbike"
            />
            <img
              className="two"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1570478260/lqwrgl3vkocncpvzikow.jpg"
              alt="dirtbike"
            />
            <img
              className="three"
              src="https://res.cloudinary.com/datcltouj/image/upload/v1570478258/iscbtckkmdofzwlneeqj.jpg"
              alt="dirtbike"
            />
          </div>
        </div>

        <div className="about-bottom">
          <h2>SYNDICATE DEVELOPMENT</h2>
          <div className="shop-contact">
            <div>
              <p>Shop Phone: 208-251-9536</p>
            </div>
            <div>
              <p>Shop Address: <a href="https://goo.gl/maps/k6PjesVBsAqDArb27">1801 N. Arthur Ave., Pocatello, ID, 83204</a></p>
            </div>
          </div>
          <div className="about-message"><p>
          Doug Haskett has been involved with motorcycles and racing for most
          of his life. Since 1998 he has been perfecting his skills in
          the mechanics of the machine,learning the fine craft of
          engine, suspension and ECU tuning, and overall bike
          fixes, upgrades and performance. He has worked at the
          highest levels of dirt bike racing, having experience with
          professional Supercross and Motocross teams such as Rocky Mountain
          ATV MC and High Desert Racing as a mechanic.He has also
          worked with many pro riders in testing and has the experience to do
          some testing himself. He continues to ride and race, and his
          lifelong passion for bikes combined with his knowledge and state of
          the art performance equipment and dyno room make him a highly
          sought-after mechanic today Have a question? Send a
          message!
          </p></div>
          <h2 className="shop_contact">CONTACT THE SHOP</h2>
          <form
            method="POST"
            action="https://formspree.io/robertknowles02@msn.com"
          >
            <div className="about-input">
              <input
                type="text"
                placeholder="your name"
                name="name"
                value={name}
                onChange={this.handleInput}
              />
              <input
                type="text"
                placeholder="your email"
                name="email"
                value={email}
                onChange={this.handleInput}
              />
              <input
                type="text"
                placeholder="subject"
                name="subject"
                value={subject}
                onChange={this.handleInput}
              />
            </div>
            <br />

            <textarea
              name="message"
              onChange={(e) => this.handleInput(e)}
              value={message}
              placeholder="...type your message here"
            />
            <br />
            <br />
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    );
  }
}
