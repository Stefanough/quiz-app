import React from "react";

const SelectUser = props => {
  return (
    <form id="selectUser-form">
      <div className="form-group">
        {/* <label htmlFor="select-field">Type your name:</label> */}
        <input
          id="select-field"
          className="form-control"
          name="username"
          type="text"
          placeholder="Type your name"
        />
        <button
          id="enter-lobby"
          className="btn btn-primary"
          type="button"
          onClick={() => props.showLobbyFromSelect()}
        >
          Enter Game Lobby
        </button>
      </div>
    </form>
  );
};

export default SelectUser;
