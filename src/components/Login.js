import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  auth() {
    axios
      .get("https://api.twitch.tv/kraken/oauth2/authorize", {
        params: {
          response_type: "code",
          client_id: "d9mc68tha8cohcs42qaufizojz0kt7",
          redirect_uri: "http://localhost:3000",
          scope: "user_read channel_subscriptions chat_login user_subscriptions"
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <button onClick={e => this.auth(e)}>Connect to twitch</button>;
  }
}
