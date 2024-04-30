const HistoryItem = ({ chatTitle, isCurrentChat, loadChat }) => {
	return (
		<div
			className={`history__item ${isCurrentChat ? 'current-chat' : ''}`}
			onClick={loadChat}
			aria-label="Load chat"
		>
			<span className='history__item-text'>{chatTitle}</span>
		</div>
	)
}

export default HistoryItem