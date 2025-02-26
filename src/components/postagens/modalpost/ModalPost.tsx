import Popup from 'reactjs-popup';
import FormPostagem from '../formpost/FormPost';
import 'reactjs-popup/dist/index.css';
import './ModalPost.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;