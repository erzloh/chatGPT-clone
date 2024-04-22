import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [userImage, setUserImage] = useState('');
	useEffect(() => {
		fetch('https://randomuser.me/api')
			.then(response => response.json())
			.then(data => {
				console.log(userImage);
				setUserImage(data.results[0].picture.thumbnail);
			})
	}, [])

	function testAPI() {
	}

  return (
    <div className='App'>
	  <aside className='sidemenu'>
		<div className='sidemenu__button' onClick={testAPI}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14" id="Add-1--Streamline-Core"><desc>Add 1 Streamline Icon: https://streamlinehq.com</desc><g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math"><path id="Union" fill="#ffffff" fill-rule="evenodd" d="M8 1c0 -0.552285 -0.44772 -1 -1 -1S6 0.447715 6 1v5H1c-0.552285 0 -1 0.44772 -1 1s0.447715 1 1 1h5v5c0 0.5523 0.44772 1 1 1s1 -0.4477 1 -1V8h5c0.5523 0 1 -0.44772 1 -1s-0.4477 -1 -1 -1H8V1Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
			<span>New chat</span>
		</div>
	  </aside>
	  <main className='chatbox'>
		<div className="chat-log">
			<div className="chat-log__message">
				<div className="chat-log__message__avatar">
					<img src={userImage} alt="avatar" />
					<span>You</span>
				</div>
				<div className="chat-log__message__content">
					<p>
						Hello, ChatGPT! How are you today?
					</p>
				</div>
			</div> 
			<div className="chat-log__message">
				<div className="chat-log__message__avatar">
					<img src='https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png' alt="avatar" />
					<span>ChatGPT</span>
				</div>
				<div className="chat-log__message__content">
					<p>
						Hello! I'm doing great, thank you. How can I help you today?
					</p>
				</div>
			</div> 
		</div>
		<div className='chatbox__input'>
			<textarea placeholder='Type a message...'></textarea>
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="14" width="14" id="Mail-Send-Email-Message--Streamline-Core"><desc>Mail Send Email Message Streamline Icon: https://streamlinehq.com</desc><g id="mail-send-email-message--send-email-paper-airplane-deliver"><path id="Subtract" fill="#ffffff" fill-rule="evenodd" d="M13.8536 0.146461c0.1397 0.13972 0.184 0.348619 0.1131 0.533043L8.96667 13.6795c-0.07232 0.188 -0.25043 0.3143 -0.45181 0.3203 -0.20138 0.006 -0.38667 -0.1095 -0.47004 -0.2929L5.95386 9.1068l3.07647 -3.07647c0.29289 -0.29289 0.29289 -0.76777 0 -1.06066s-0.76777 -0.29289 -1.06066 0L4.89319 8.04615 0.2931 5.9552c-0.183409 -0.08337 -0.29886581 -0.26867 -0.292877753 -0.47005C0.00621034 5.28378 0.132474 5.10566 0.320512 5.03334L13.3205 0.0333416c0.1844 -0.0709322 0.3933 -0.02660085 0.5331 0.1131194Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>
			</button>
		</div>
	  </main>
    </div>
  )
}

export default App
