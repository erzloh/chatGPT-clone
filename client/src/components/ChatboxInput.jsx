import SendIcon from './icons/SendIcon'
import { useState } from 'react'

const ChatboxInput = ({ setMessages }) => {
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
		setMessages((prevState) => [
			...prevState,
			{
				message
			}
		])
		setMessage('')
	}

	function handleKeyDown(event) {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            handleSubmit(event);
        }
    };

	return (
		<form className='chatbox__input' onSubmit={handleSubmit}>
			<textarea 
				placeholder='Type a message...'
				value={message}
				name='message'
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				aria-label='type your message here'
			></textarea>
			<button type='sumbit' aria-label='Send message'>
				<SendIcon />
			</button>
		</form>
	)
}

export default ChatboxInput