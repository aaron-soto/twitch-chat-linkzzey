import { useEffect } from "react";
import "./Message.css";

const Message = ({ message, streamer }) => {
	return (
		<div className="message">
			&lt;
			<span
				className={`title ${message.extras.userState.mod ? "mod" : ""} ${
					message.extras.userState.subscriber ? "subscriber" : ""
				}
				${message.extras.userState.badges?.vip ? "vip" : ""} ${
					message.extras.userState.turbo ? "turbo" : ""
				}`}
			>
				{message.user}
			</span>
			&gt;&nbsp;
			{message.message}
		</div>
	);
};

export default Message;
