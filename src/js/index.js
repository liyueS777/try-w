// import _ from 'lodash';
import { cube } from './math'
import '../css/index.css';
import Icon from '../imgs/uu.jpg';
import {printA,printB} from './print'
console.log('这里是index1')
console.log('你在搞什么+1~你真的不错~厉害啊大叔~给你点个赞');
//环境变量
if(process.env.NODE_ENV == "dev"){
    console.log('这里是开发环境')
}else if(process.env.NODE_ENV !== "production"){
    console.log('这里是生产环境')
}

function component() {
    // var ele = document.createElement('div');
    var ele = document.createElement('pre');
    ele.innerHTML = _.join(['hellow','webpackLLLiash'],'');
    // ele.innerHTML = _.join(['hellow webpack','5 cubed is equal to '+ cube(5)],'');
    // ele.innerHTML = ['hellow webpack','5 cubed is equal toAABBCC'+ cube(5)].join('\n\n');
    // console.log('__:',_);
    ele.classList.add('hellow');
    // var myIcon = new Image();
    // myIcon.src=Icon;
    // ele.appendChild(myIcon)
    // ele.onclick = printA;
    // myIcon.onclick = printB;
    return ele;
};
document.body.appendChild(component());