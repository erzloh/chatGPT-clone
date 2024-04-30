import { useEffect, useState, useCallback } from 'react'
import './App.css'
import Sidemenu from './components/Sidemenu'
import Chatbox from './components/Chatbox'

import data from './data'

function App() {
	const [chats, setChats] = useState(data || [
		{
			id: 0,
			title: 'First Chat',
			date: new Date().toISOString(),
			messages: []
		}
	])
	const [currentChatId, setCurrentChatId] = useState(chats[0].id)
	const [messages, setMessages] = useState(chats[0].messages)
	const [isGptAnswering, setIsGptAnswering] = useState(false)
	const [showSidemenu, setShowSidemenu] = useState(false)

	const toggleSidemenu = useCallback(() => setShowSidemenu(prev => !prev), []);

	// Update the chats state each time the messages state is updated
	useEffect(() => {
		setChats((prevState) => {
			const newChats = [...prevState]
			const currentChat = newChats.find(chat => chat.id === currentChatId)
			currentChat.messages = messages
			return newChats
		})
	}, [messages])

	return (
		<div className='App'>
			<Sidemenu
				setMessages={setMessages}
				isGptAnswering={isGptAnswering}
				showSidemenu={showSidemenu}
				toggleSidemenu={toggleSidemenu}
				chats={chats}
				setChats={setChats}
				currentChatId={currentChatId}
				setCurrentChatId={setCurrentChatId}
			/>
			<Chatbox
				messages={messages}
				setMessages={setMessages}

				isGptAnswering={isGptAnswering}
				setIsGptAnswering={setIsGptAnswering}

				setShowSidemenu={setShowSidemenu}
				toggleSidemenu={toggleSidemenu}
			/>
			{showSidemenu &&
        		<div className="overlay" onClick={toggleSidemenu}></div>
    		}
		</div>
	)
}

export default App
