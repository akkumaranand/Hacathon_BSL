import React, { Component } from "react";
import "./chatbody.css";
import ChatList from "../Chatlist/ChatList";
import ChatContent from "../ChatContent/ChatContent";
// import ChatList from "../chatList/ChatList";
// import ChatContent from "../chatContent/ChatContent";
// import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        
        <ChatList />
        <ChatContent />
       
      </div>
    );
  }
}
