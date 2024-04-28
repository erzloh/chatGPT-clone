import { useState, useRef, useEffect } from 'react'

import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import LoadingIcon from './icons/LoadingIcon'
import GptIcon from './icons/GptIcon'

import ChatMessage from './ChatMessage'
import ChatboxInput from './ChatboxInput'

const Chatbox = ({ messages, setMessages, isGptAnswering, setIsGptAnswering}) => {
	const scrollRef = useRef(null)

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
		</main>
	)
}

export default Chatbox