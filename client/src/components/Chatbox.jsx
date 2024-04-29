import { useRef, useEffect } from 'react'

import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import LoadingIcon from './icons/LoadingIcon'
import GptIcon from './icons/GptIcon'
import HamburgerMenuIcon from './icons/HamburgerMenuIcon'

import ChatMessage from './ChatMessage'
import ChatboxInput from './ChatboxInput'

const Chatbox = ({ messages, setMessages, isGptAnswering, setIsGptAnswering, toggleSidemenu}) => {
	const scrollRef = useRef(null)

	// Scrolls to the bottom of the chat when new messages are added
	useEffect(() => {
		if (scrollRef.current) {
		  scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages]);

	const messagesJSX = messages.map((message, index) =>
		<ChatMessage
			key={message.id}
			avatar={message.role === 'user' ? userAvatar : chatgptAvatar}
			name={message.role === 'user' ? 'You' : 'ChatGPT'}
			message={message.message}
		/>
	)

	return (
		<main className='chatbox'>
			<div className='navbar'>
				<button className='navbar__button' aria-label='Open menu' onClick={toggleSidemenu}>
					<HamburgerMenuIcon />
				</button>
			</div>
			<hr />
			<div className='chatbox-main'>
				{messages.length === 0 ?
					<div className="empty-chat-log">
						<GptIcon />
						<p>
							How can I help you today?
						</p>
					</div>
					:
					<div className="chat-log" ref={scrollRef}>
						{messagesJSX}
						<div className="loading-icon-div">
							{isGptAnswering && <LoadingIcon />}
						</div>
					</div>
				}
				<ChatboxInput
					messages={messages}
					setMessages={setMessages}
					isGptAnswering={isGptAnswering}
					setIsGptAnswering={setIsGptAnswering}
				/>
			</div>
		</main>
	)
}

export default Chatbox