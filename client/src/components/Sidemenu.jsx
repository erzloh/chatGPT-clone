import PlusIcon from './icons/PlusIcon/PlusIcon';

const Sidemenu = () => {
  return (
    <aside className='sidemenu'>
      <div className='sidemenu__button'>
        <PlusIcon />
        <span>New chat</span>
      </div>
    </aside>
  );
};

export default Sidemenu;
