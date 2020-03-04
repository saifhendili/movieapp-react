import React, { Component } from "react";
import Modal from "react-modal";
import Add from "./images/main1.png";
const customStyles = {
  content: {
    top: "59%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "499px",
    width: "300px",
    backgroundColor: "#1c1e21",
    color: "white"
  }
};

class Form extends Component {
  state = {
    isOpen: false,
    formInput: {
      name: "",
      rating: "",
      lien: ""
    }
  };

  handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  closeModal = () => this.setState({ isOpen: false });
  handleChange = e =>
    this.setState({
      formInput: { ...this.state.formInput, [e.target.name]: e.target.value }
    });
  handleChangeRating = e => {
    var regexp = /^[1-5]$/;
    if (regexp.test(e.target.value[0])) {
      this.setState({
        rating: e.target.value,
        formInput: { ...this.state.formInput, rating: e.target.value }
      });
    } else {
      this.setState({
        rating: "",
        formInput: { ...this.state.formInput, rating: "" }
      });
    }
  };
  render() {
    return (
      <div>
        <img
          src={Add}
          className="imgform"
          width="150px"
          onClick={this.handleOpen}
        />
        <Modal
          style={customStyles}
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
        >
          <form
            className="myForm"
            onSubmit={e => {
              e.preventDefault();
              this.props.handelSubmit({
                name: this.state.formInput.name,
                rating: this.state.formInput.rating,
                lien: this.state.formInput.lien
              });
              this.setState({ isOpen: false });
            }}
          >
            <label style={{ margin: "15px" }}>Movie Name </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />

            <label style={{ margin: "15px" }}>Rating</label>
            <input
              type="text"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChangeRating}
              maxLength={1}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />
            <label style={{ margin: "15px" }}>Link</label>
            <input
              type="text"
              name="lien"
              onChange={this.handleChange}
              style={{
                margin: "15px",
                padding: "13px 40px",
                borderRadius: "5px"
              }}
            />
            <button
            //   onClick={this.onSubmit}
              style={{
                margin: "25px 50px",
                padding: "15px 35px",
                borderRadius: "5px"
              }}
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Form;
