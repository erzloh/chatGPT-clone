const ChatMessage = ({ avatar, name, message }) => {
	return (
		<div className="chat-log__message">
			<div className="chat-log__message__avatar">
				<img src={avatar} alt={`${name}'s avatar`} />
				<span>{name}</span>
			</div>
			<p className="chat-log__message__content" >
				{message}
			</p>
		</div> 
	)
}

export default ChatMessage