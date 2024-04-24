import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import SendIcon from './icons/SendIcon/SendIcon'
import ChatMessage from './ChatMessage'

const Chatbox = () => {
	return (
		<main className='chatbox'>
			<div className="chat-log">
				<ChatMessage 
					avatar={userAvatar}
					name="You"
					message="Hello, ChatGPT! How are you today?"
				/>
				<ChatMessage 
					avatar={chatgptAvatar}
					name="ChatGPT"
					message="Hello! I'm doing great, thank you. How can I help you today?"
				/>

			</div>
			<div className='chatbox__input'>
				<textarea placeholder='Type a message...'></textarea>
				<button>
					<SendIcon />
				</button>
			</div>
		</main>
	)
}

export default Chatbox