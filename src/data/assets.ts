export type AssetPurpose = 'hero' | 'why' | 'gallery' | 'service' | 'package';

export type AssetMapEntry = {
  asset: string;
  purpose: AssetPurpose;
  section: string;
  category: string;
};

export const assetMap: AssetMapEntry[] = [
  { asset: '01.jpg', purpose: 'hero', section: 'Hero', category: 'Wedding' },
  { asset: '02.jpg', purpose: 'hero', section: 'Hero', category: 'Wedding' },
  { asset: '03.jpg', purpose: 'hero', section: 'Hero', category: 'Engagement' },
  { asset: 'why choose us.png', purpose: 'why', section: 'Why Choose Us', category: 'Brand' },
  { asset: 'fast delivery.png', purpose: 'why', section: 'Why Choose Us', category: 'Brand' },
  { asset: 'custom package.png', purpose: 'why', section: 'Why Choose Us', category: 'Brand' },
  { asset: '1.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '2.jpg', purpose: 'gallery', section: 'Gallery', category: 'Pre-Wedding' },
  { asset: '3.jpg', purpose: 'gallery', section: 'Gallery', category: 'Engagements' },
  { asset: '4.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '5.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '6.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '7.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '8.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '9.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '10.jpg', purpose: 'gallery', section: 'Gallery', category: 'Pre-Wedding' },
  { asset: '11.jpg', purpose: 'gallery', section: 'Gallery', category: 'Engagements' },
  { asset: '12.jpg', purpose: 'gallery', section: 'Gallery', category: 'Engagements' },
  { asset: '13.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '14.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '15.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '16.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '17.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '18.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '19.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '20.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '21.jpg', purpose: 'gallery', section: 'Gallery', category: 'Model Shoots' },
  { asset: '22.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '23.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '24.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '25.jpg', purpose: 'gallery', section: 'Gallery', category: 'Events' },
  { asset: '26.jpg', purpose: 'gallery', section: 'Gallery', category: 'Events' },
  { asset: '27.jpg', purpose: 'gallery', section: 'Gallery', category: 'Events' },
  { asset: '28.jpg', purpose: 'gallery', section: 'Gallery', category: 'Events' },
  { asset: '29.jpg', purpose: 'gallery', section: 'Gallery', category: 'Events' },
  { asset: '30.jpg', purpose: 'gallery', section: 'Gallery', category: 'Engagements' },
  { asset: '31.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '32.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '33.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '34.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '35.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '36.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '37.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '38.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '39.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: '40.jpg', purpose: 'gallery', section: 'Gallery', category: 'Weddings' },
  { asset: 'why choose us.png', purpose: 'service', section: 'Services', category: 'Wedding Photography' },
  { asset: 'fast delivery.png', purpose: 'service', section: 'Services', category: 'Cinematography' },
  { asset: '2.jpg', purpose: 'service', section: 'Services', category: 'Pre-Wedding Shoots' },
  { asset: '4.jpg', purpose: 'service', section: 'Services', category: 'Engagements' },
  { asset: 'product.png', purpose: 'service', section: 'Services', category: 'Events & Functions' },
  { asset: '40.jpg', purpose: 'package', section: 'Marriage Packages', category: 'Silver' },
  { asset: '23.jpg', purpose: 'package', section: 'Marriage Packages', category: 'Gold' },
  { asset: '8.jpg', purpose: 'package', section: 'Marriage Packages', category: 'Platinum' }
];

export const photo = (name: string) => `/assets/Photos/${encodeURIComponent(name)}`;



