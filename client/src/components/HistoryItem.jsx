const HistoryItem = ({ chatTitle, toggleSidemenu, updateCurrentChatId, isCurrentChat }) => {
	const loadChat = () => {
		updateCurrentChatId()
		toggleSidemenu()
	}
	return (
		<div className={`history__item ${isCurrentChat ? 'current-chat' : ''}`} onClick={loadChat}>
			<span className='history__item-text'>{chatTitle}</span>
		</div>
	)
}

export default HistoryItem