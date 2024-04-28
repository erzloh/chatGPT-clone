import PlusIcon from './icons/PlusIcon';

const Sidemenu = ({ setMessages, isGptAnswering }) => {
	const clearChat = () => {
		if (!isGptAnswering) {
			setMessages([])
		}
	}

	return (
		<aside className='sidemenu'>
			<button className={isGptAnswering ? 'unusable-button sidemenu__button' : 'sidemenu__button' } onClick={clearChat} aria-label="Create new chat">
				<PlusIcon />
				<span>
					New chat
				</span>
			</button>
		</aside>
	);
};

export default Sidemenu;
