import { create } from 'zustand';

type MenuState = {
  visible: boolean;
  setVisibility: (visibility: boolean) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  visible: false,
  setVisibility: (visibility) => {
    set(() => ({
      visible: visibility,
    }));
  },
}));
