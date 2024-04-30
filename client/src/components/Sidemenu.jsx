import PlusIcon from './icons/PlusIcon';
import CloseIcon from './icons/CloseIcon'

import HistoryItem from './HistoryItem'

const Sidemenu = ({ setMessages, isGptAnswering, showSidemenu, toggleSidemenu, chats, setChats, setCurrentChatId, currentChatId }) => {
	const createNewChat = () => {
		const newChats = [...chats]
		newChats.unshift({
			id: chats.length,
			title: 'New Chat',
			date: new Date().toISOString,
			messages: []
			})
		setChats(newChats)
		setMessages(newChats[0].messages)
		setCurrentChatId(newChats[0].id)
		toggleSidemenu()
	}

	const historyItemJSX = chats.map((chat) => {
		return (
			<HistoryItem 
				key={chat.id}
				chatTitle={chat.title}
				loadChat={() => {
					setMessages(chat.messages)
					setCurrentChatId(chat.id)
					toggleSidemenu()
				}}
				isCurrentChat={currentChatId === chat.id}
			/>
		)
	})

	return (
		<div className={`sidemenu-container ${showSidemenu ? 'show-sidemenu' : ''}`}>
			<aside className='sidemenu'>
				<button
					className={isGptAnswering ? 'unusable-button sidemenu__button' : 'sidemenu__button' }
					onClick={createNewChat}
					aria-label="Create new chat"
					aria-disabled={isGptAnswering}
				>
					<PlusIcon />
					<span>
						New chat
					</span>
				</button>
				<div className='history'>
					<span className='history-text'>Chat History</span>
					{historyItemJSX}
				</div>
			</aside>
			<div className='close-button-container'>
				<button className='close-button' aria-label='Close menu' onClick={toggleSidemenu}>
					<CloseIcon />
				</button>
			</div>
		</div>
	);
};

export default Sidemenu;
