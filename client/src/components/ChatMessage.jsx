const ChatMessage = (props) => {
	return (
		<div className="chat-log__message">
			<div className="chat-log__message__avatar">
				<img src={props.avatar} alt="avatar" />
				<span>{props.name}</span>
			</div>
			<div className="chat-log__message__content">
				<p>
					{props.message}
				</p>
			</div>
		</div> 
	)
}

export default ChatMessage