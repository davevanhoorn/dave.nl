import create from 'zustand';

type ModalState = {
  visible: boolean;
  setVisibility: (visibility: boolean) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  visible: false,
  setVisibility: (visibility) => {
    set(() => ({
      visible: visibility,
    }));
  },
}));
