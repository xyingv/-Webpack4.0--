import cute from './cute.jpg';
import style from './index.scss';
import createAvatar from './createAvatar.js';

createAvatar();

var img=new Image();
img.src=cute;
img.classList.add(style.cute);

var root=document.getElementById('root');
root.append(img);