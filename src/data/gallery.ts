import { photo } from './assets';

export type GalleryCategory = 'ALL' | 'WEDDINGS' | 'ENGAGEMENTS' | 'PRE-WEDDING' | 'EVENTS' | 'MODEL SHOOTS' | 'PRODUCT SHOOTS';

export const galleryFilters: GalleryCategory[] = ['ALL', 'WEDDINGS', 'ENGAGEMENTS', 'PRE-WEDDING', 'EVENTS', 'MODEL SHOOTS', 'PRODUCT SHOOTS'];

export const galleryItems = [
  ['1.jpg','Weddings'],['2.jpg','Pre-Wedding'],['3.jpg','Engagements'],['4.jpg','Weddings'],['5.jpg','Weddings'],['6.jpg','Weddings'],
  ['7.jpg','Weddings'],['8.jpg','Weddings'],['9.jpg','Weddings'],['10.jpg','Pre-Wedding'],['11.jpg','Engagements'],['12.jpg','Engagements'],
  ['13.jpg','Weddings'],['14.jpg','Weddings'],['15.jpg','Weddings'],['16.jpg','Model Shoots'],['17.jpg','Model Shoots'],['18.jpg','Model Shoots'],
  ['19.jpg','Model Shoots'],['20.jpg','Model Shoots'],['21.jpg','Model Shoots'],['22.jpg','Weddings'],['23.jpg','Weddings'],['24.jpg','Weddings'],
  ['25.jpg','Events'],['26.jpg','Events'],['27.jpg','Events'],['28.jpg','Events'],['29.jpg','Events'],['30.jpg','Engagements'],
  ['31.jpg','Weddings'],['32.jpg','Weddings'],['33.jpg','Weddings'],['34.jpg','Weddings'],['35.jpg','Weddings'],['36.jpg','Weddings'],
  ['37.jpg','Weddings'],['38.jpg','Weddings'],['39.jpg','Weddings'],['40.jpg','Weddings']
].map(([file, category]) => ({ file, category, src: photo(file), alt: `The Wedding Unit ${category.toLowerCase()} photograph` }));



