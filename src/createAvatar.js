import cute from './cute.jpg';

function createAvatar(){
    var img=new Image();
    img.src=cute;
    img.classList.add('cute');

    var root=document.getElementById('root');
    root.append(img);
}

export default createAvatar;