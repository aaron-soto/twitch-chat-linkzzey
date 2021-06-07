import "./App.css";
import { useState, useEffect } from "react";
import Message from "./components/Message";

var ComfyJS = require("comfy.js");

const MAX_MESSAGES = 5;
const STREAM = "linkzzey";

ComfyJS.Init(STREAM);
function App() {
	// const [messagesList, setMessagesList] = useState([]);
	const [messagesList, setMessagesList] = useState([]);

	useEffect(() => {
		ComfyJS.onChat = (user, message, flags, self, extra) => {
			// setMessagesList((previousState) => [...previousState, message]);
			// console.log(extra.userState["user-type"]);
			if (messagesList.length > MAX_MESSAGES) {
				messagesList.shift();
				setMessagesList(messagesList);
			}
			setMessagesList([
				...messagesList,
				{
					user: user,
					message: message,
					id: extra.id,
					extras: extra,
				},
			]);
		};
	});

	return (
		<div className="App">
			<div id="messages" className="messages">
				{messagesList.map((message) => {
					return (
						<Message
							streamer={STREAM}
							key={message.id}
							message={message}
						></Message>
					);
				})}
			</div>
		</div>
	);
}

export default App;
