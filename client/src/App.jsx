import { useState } from 'react'
import './App.css'
import Sidemenu from './components/Sidemenu'
import Chatbox from './components/Chatbox'

function App() {
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

	return (
		<div className='App'>
			<Sidemenu
				setMessages={setMessages}
				isGptAnswering={isGptAnswering}
			/>
			<Chatbox
				messages={messages}
				setMessages={setMessages}
				isGptAnswering={isGptAnswering}
				setIsGptAnswering={setIsGptAnswering}
			/>
		</div>
	)
}

export default App
