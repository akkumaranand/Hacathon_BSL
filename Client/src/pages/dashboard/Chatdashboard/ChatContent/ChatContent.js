import React, { Component, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../Chatlist/Avatar";
import ChatItem from "./ChatItem";
import SendIcon from '@mui/icons-material/Send';
export default class ChatContent extends Component {
    messagesEndRef = createRef(null);
    chatItms = [
        {
            key: 1,
            image:
                "data:image/png;base64,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",
            type: "",
            msg: "Hi, How are you?",
        },
        {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "data:image/png;base64,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",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Finally. What's the plan?",
        },
        {
            key: 6,
            image:
                "data:image/png;base64,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",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Nothing,What about You ?",
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            chat: this.chatItms,
            msg: "",
        };
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 13) {
                if (this.state.msg != "") {
                    this.chatItms.push({
                        key: 1,
                        type: "",
                        msg: this.state.msg,
                        image:
                            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
                    });
                    this.setState({ chat: [...this.chatItms] });
                    this.scrollToBottom();
                    this.setState({ msg: "" });
                }
            }
        });
        this.scrollToBottom();
    }
    onStateChange = (e) => {
        this.setState({ msg: e.target.value });
    };

    render() {
        return (
            <div className="main__chatcontent">
                <div className="content__header">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <Avatar
                                isOnline="active"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                            />
                            <p>DRIVER 2</p>
                        </div>
                    </div>

                    <div className="blocks">
                        <div className="settings">
                            <button className="btn-nobg">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content__body">
                    <div className="chat__items">
                        {this.state.chat.map((itm, index) => {
                            return (
                                <ChatItem
                                    animationDelay={index + 2}
                                    key={itm.key}
                                    user={itm.type ? itm.type : "me"}
                                    msg={itm.msg}
                                    image={itm.image}
                                />
                            );
                        })}
                        <div ref={this.messagesEndRef} />
                    </div>
                </div>
                <div className="content__footer">
                    <div className="sendNewMessage">
                        <button className="addFiles">
                            <i className="fa fa-plus"></i>
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message here"
                            onChange={this.onStateChange}
                            value={this.state.msg}
                        />
                        <button className="btnSendMsg" id="sendMsgBtn">
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
