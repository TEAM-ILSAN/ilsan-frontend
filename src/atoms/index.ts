import { atom } from 'recoil';

export const currentOpenIndexState = atom<number | null>({
  key: 'currentOpenIndex',
  default: null,
});
