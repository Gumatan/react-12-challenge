import React, { Component } from "react";

class TabSelector extends Component {
  handleChangeTab = event => {
    const buttonId = event.target.id;
    this.props.getActiveId(buttonId);
  };

  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.handleChangeTab}
          className={activeId === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.handleChangeTab}
          className={activeId === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.handleChangeTab}
          className={activeId === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
