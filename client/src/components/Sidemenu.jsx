import PlusIcon from './icons/PlusIcon';

const Sidemenu = () => {
  return (
    <aside className='sidemenu'>
      <button className='sidemenu__button' aria-label="Create new chat">
        <PlusIcon />
        <span>New chat</span>
      </button>
    </aside>
  );
};

export default Sidemenu;
