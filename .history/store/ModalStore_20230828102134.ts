import {create} from 'zustand';

interface ModalState {
isOpen: boolean;
openModal: () => void;
closeModal: () => void;
}