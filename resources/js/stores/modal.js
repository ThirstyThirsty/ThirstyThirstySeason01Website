import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    isOpen: false,
    title: '',
    body: '',
    emoji: '',
    color: ''
  }),
  actions: {
    openModal(title, body, emoji, color) {
      this.isOpen = true;
      this.title = title;
      this.body = body;
      this.emoji = emoji;
      this.color = color;
    },
    closeModal() {
      this.isOpen = false;
      this.title = '';
      this.body = '';
      this.emoji = '';
      this.color = '';
    }
  }
})
