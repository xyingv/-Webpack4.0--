import cute from './cute.jpg';
import './index.scss';

var img=new Image();
img.src=cute;
img.classList.add('cute');

var root=document.getElementById('root');
root.append(img);