import SendIcon from './icons/SendIcon'
import { useState } from 'react'

const ChatboxInput = () => {
	const [message, setMessage] = useState('')

	function handleChange(event) {
		setMessage(event.target.value)
		console.log('updating state')
	}

	function handleSubmit(event) {
		event.preventDefault()
		if (message.trim() == '')
			return
		console.log('form has been submitted')
	}

	return (
		<form className='chatbox__input' onSubmit={handleSubmit}>
			<textarea 
				placeholder='Type a message...'
				value={message}
				name='message'
				onChange={handleChange}
				aria-label='type your message here'
			></textarea>
			<button type='sumbit' aria-label='Send message'>
				<SendIcon />
			</button>
		</form>
	)
}

export default ChatboxInput