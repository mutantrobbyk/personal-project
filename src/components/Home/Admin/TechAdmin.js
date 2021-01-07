import React, { Component } from "react";
import "./TechAdmin.css";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { connect } from "react-redux";
import Cloudinary from "../../Blogs/Cloudinary";

class TechAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      category: "",
      title: "",
      body: "",
      url: "",
    };
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange2(value) {
    this.setState({ body: value });
  }
  componentDidMount() {
    this.getAllTips();
  }
  componentDidUpdate() {
    this.checkAdmin();
  }
  checkAdmin = () => {
    if (!this.props.is_admin) {
      this.props.history.push(`/auth`);
    }
  };
  getUrl = (url) => {
    this.setState({
      url: url,
    });
  };
  getAllTips = () => {
    axios.get("/tips/getAllTips").then((res) => {
      this.setState({
        tips: res.data,
      });
    });
  };
  createTip = (body) => {
    axios.post("/tips/createNewTips", body).then((res) => {
      this.setState({
        tips: res.data,
      });
    });
  };
  deleteTip = (tip_id) => {
    axios.delete(`/tips/${tip_id}`).then((res) => {
      this.setState({
        tips: res.data,
      });
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  goBack = () => {
    this.props.history.push("/admin/landing");
  };
  render() {
    const { category, title, body, url } = this.state;
    return (
      <div className="TechAdmin">
        <div className="tips-outer-box">
          {this.state.tips.map((el) => {
            return (
              <div className="admin-tips" key={el.tip_id}>
                <div className="pic_box">
                  <img className="tips-pic" src={el.url} alt="" />
                </div>
                <div className="cat-title">
                  <h5>{el.category}</h5>
                  <h3>{el.title}</h3>
                </div>
                <div className="tip-body">
                  <section dangerouslySetInnerHTML={{ __html: el.body }} />
                </div>
                <div className="edit-del">
                  <button
                    onClick={() =>
                      this.props.history.push(`/admin/tech/edit/${el.tip_id}`)
                    }
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => {
                      this.deleteTip(el.tip_id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <h2>Create a New Tip</h2>
        <br />
        <br />
        <div>
          <input
            value={this.state.category}
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="category"
            name="category"
          />
          <input
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="title"
            name="title"
          />
          <ReactQuill value={this.state.body} onChange={this.handleChange2} />
          <input
            value={this.state.url}
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="url"
            name="url"
          />
          <Cloudinary getUrl={this.getUrl} />
          <button
            onClick={() => {
              this.createTip({ category, title, body, url });
              this.setState({
                category: "",
                title: "",
                body: "",
                url: "",
              });
            }}
          >
            CREATE TIP
          </button>
          <br />
          <button onClick={() => this.goBack()}>BACK TO ADMIN</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(Redux) {
  const { is_admin } = Redux;
  return { is_admin };
}
export default connect(mapStateToProps)(TechAdmin);
