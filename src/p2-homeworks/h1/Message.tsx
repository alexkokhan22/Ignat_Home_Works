import React from "react";
import classes from "./Message.module.css";


type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


const Message: React.FC<MessageDataType> = (props) => {
    return (
        <div className={classes.message}>
            <img className={classes.img} alt='Текст' src={props.avatar}/>
            <div className={classes.content}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>

            <div className={classes.clear}></div>

        </div>
    )
}

export default Message;