import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
  bgOpacity: 0.85,
  showHideOpacity: true,
});
lightbox.init();