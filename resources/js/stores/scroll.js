import { defineStore } from 'pinia';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const OFFSET = 100;

export const useScrollStore = defineStore({
  id: 'scroll',
  state: () => ({
    header: 0,
    tier: 0,
    artwork: 0,
    partners: 0,
    roadmap: 0,
    team: 0
  }),
  actions: {
    scrollTo(sectionId) {
      gsap.to(window, { duration: 1, scrollTo: { y: '#' + sectionId, offsetY: OFFSET } })
    }
  }
});
