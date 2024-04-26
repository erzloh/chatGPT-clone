import { useState } from 'react'
import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import ChatMessage from './ChatMessage'
import ChatboxInput from './ChatboxInput'

const Chatbox = () => {
	const [messages, setMessages] = useState([
		{
			message: `Hello, ChatGPT! How are you today?`
		},
		{
			message: `Hello! I'm doing great, thank you. How can I help you today?`
		}
	])

	const messagesJSX = messages.map((message, index) =>
		<ChatMessage
			key={index}
			avatar={index % 2 === 0 ? userAvatar : chatgptAvatar}
			name={index % 2 === 0 ? 'You' : 'ChatGPT'}
			message={message.message}
		/>
	)

	return (
		<main className='chatbox'>
			<div className="chat-log">
				{messagesJSX}
			</div>
			<ChatboxInput
				setMessages={setMessages}
			/>
		</main>
	)
}

export default Chatbox