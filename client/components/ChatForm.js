import React, { Component } from 'react';

class ChatForm extends Component {

//   post: function(data) {
//   return $.ajax({
//     type: 'POST',
//     url: this.props.url,
//     crossDomain: true,
//     data: JSON.stringify(data),
//     contentType: 'application/json',
//     headers: {}
//   })
// }

  // handle: function(e) {
    // e.preventDefault();
    // var data = {
      // message: React.findDOMNode(this.refs.message).value.trim(),
      // created_by: 'Ghost Face Killer',
    // };
    // React.findDOMNode(this.refs.message).value = '';
    // var that = this;
    // this.post(data).done(function (res) {
      // that.props.update(res);
    // });
  // },

  render() {
    return (
      <form id="chat-form" onSubmit={this.handle}>
        <input type="text" ref="message" />
        <input type="submit" className="hidden" />
      </form>
    );
  }
} 

module.exports = ChatForm;
