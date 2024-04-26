import userAvatar from '../assets/user_icon.png'
import chatgptAvatar from '../assets/chatgpt_icon.webp'
import ChatMessage from './ChatMessage'
import ChatboxInput from './ChatboxInput'

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
			<ChatboxInput />
		</main>
	)
}

export default Chatbox