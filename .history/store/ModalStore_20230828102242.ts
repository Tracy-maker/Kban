import {create} from 'zustand';

interface ModalState {
isOpen: boolean;
openModal: () => void;
closeModal: () => void;
}

export const ModalContext = createContext<ModalState>()((set)=> ({
})ƒ)