import { useState, useRef, useEffect } from 'react'

import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import LoadingIcon from './icons/LoadingIcon'

import ChatMessage from './ChatMessage'
import ChatboxInput from './ChatboxInput'

const Chatbox = () => {
	const scrollRef = useRef(null)
	const [messages, setMessages] = useState([
		{
			id: 0,
			message: `Hello, ChatGPT! How are you today?`,
			role: 'user'
		},
		{
			id: 1,
			message: `Hello! I'm doing great, thank you. How can I help you today?`,
			role: 'assistant'
		}
	])
	const [isGptAnswering, setIsGptAnswering] = useState(false)

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
			<div className="chat-log" ref={scrollRef}>
				{messagesJSX}
				<div className="loading-icon-div">
					{isGptAnswering && <LoadingIcon />}
				</div>
			</div>
			<ChatboxInput
				messages={messages}
				setMessages={setMessages}
				isGptAnswering={isGptAnswering}
				setIsGptAnswering={setIsGptAnswering}
			/>
		</main>
	)
}

export default Chatbox