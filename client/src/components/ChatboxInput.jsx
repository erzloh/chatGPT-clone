import SendIcon from './icons/SendIcon'
import StopIcon from './icons/StopIcon'
import { useState } from 'react'

const ChatboxInput = ({ messages, setMessages, isGptAnswering, setIsGptAnswering }) => {
	const [message, setMessage] = useState('')

	function handleMessageChange(event) {
		setMessage(event.target.value)
	}

	async function handleMessageSubmit(event) {
		event.preventDefault()
		if (message.trim() == '' || isGptAnswering)
			return

		const newMessages = [
			...messages,
			{
				id: messages.length,
				message: message,
				role: 'user'
			}
		]
		setMessages(newMessages)
		setMessage('')
		addApiResponseToMessagesState(newMessages)
	}

	async function addApiResponseToMessagesState(messagesArray) {
		try {
			setIsGptAnswering(true)
			// const response = await fetch('http://localhost:3080/', {
			const response = await fetch('https://mychatgptserver-erzlohs-projects.vercel.app/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					messages: messagesArray.map((message) => (
						{
							role: message.role,
							content: message.message
						}
					))
				})
			})
			let data = {};
			if (!response.ok) {
				data = {
					message: 'Sorry, your message limit has been exceeded. Please try again later.'
				}
			} else {
				data = await response.json()
			}
			setMessages((prevState) => [
				...prevState,
				{
					id: prevState.length,
					message: data.message,
					role: 'assistant'
				}
			])

			setIsGptAnswering(false)

		} catch (error) {
			console.error('There was a problem with your fetch operation:', error)
		}
	}

	function handleKeyDown(event) {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            handleMessageSubmit(event);
        }
    };

	return (
		<form className='chatbox__input' onSubmit={handleMessageSubmit}>
			<textarea 
				placeholder='Type a message...'
				value={message}
				name='message'
				onChange={handleMessageChange}
				onKeyDown={handleKeyDown}
				aria-label='type your message here'
			></textarea>
			<button type='submit' aria-label='Send message'>
				{isGptAnswering ? <StopIcon /> : <SendIcon />}
			</button>
		</form>
	)
}

export default ChatboxInput