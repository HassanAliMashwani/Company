import { gsap } from 'gsap';

let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

