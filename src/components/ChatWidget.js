import React from "react";
var tmi = require("tmi.js");

export default class ChatWidget extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    var client = tmi.client(
      {
        url: "https://api.twitch.tv/kraken/user",
        method: "GET",
        headers: {
          Accept: "application/vnd.twitchtv.v3+json",
          Authorization: "OAuth 3eb787117110834e079932bedfb8e6a7",
          "Client-ID": "1dac77895e8f56fa1a71e7c43ef09d87"
        }
      },
      function(err, res, body) {
        console.log("oh no");
        console.log(body);
      }
    );

    console.log(tmi);

    client.connect().then(data => {
      console.log("connected to server");

      client
        .join("2c2c")
        .then(data => {
          console.log("joined channel");

          // message or /me event inside our connected channel
          client.on("message", (channel, userstate, message, self) => {
            if (self) {
              return;
            }

            console.log({ channel, userstate, message });
            console.log(userstate);

            let messages = this.state.messages;
            messages.unshift({ userstate, message });

            this.setState({
              messages
            });
          });
        })
        .catch(err => {
          console.log("oh no");
          console.log(err);
        });
    });
  }

  render() {
    return (
      <div id="log" className="messages">
        {this.state.messages.map((m, i) => (
          <div key={this.state.messages.length - i} className="chat-message">
            <span style={{ fontWeight: "bold", color: m.userstate.color }}>
              {" "}{m.userstate["display-name"]}{" "}
            </span>
            :
            {" "}
            {m.message}
            {" "}
          </div>
        ))}
      </div>
    );
  }
}
