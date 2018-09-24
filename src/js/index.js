// import _ from 'lodash';
import { cube } from './math'
import '../css/index.css';
import Icon from '../imgs/uu.jpg';
import {printA,printB} from './print'
// import {file,parse} from './global'
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
    // 这里的 /* webpackChunkName: "group-foo" */  是注释的特殊语法，固定的，这样实现按需加载
    return import(/* webpackChunkName: "group-foo" */  'lodash').then(_ =>{
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['hellow webpack','5 cubed is equal to '+ cube(5)],'');
    ele.onclick = function (params) {

        // require.ensure([],function(require){
            // require('js')
        // },'你想要按需加载的模块的名字')
        require.ensure([],function(require){
            var A =require('./myRequreOne.js');
            // var A =require('./myRequreOne.js');
            A();
        },'myrequireOne')
        // 本文来自 FeLabel 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/yangyiboshigou/article/details/68928353?utm_source=copy 
    }
    return ele;
    
    })
    // ele.innerHTML = _.join(['hellow','webpackLLLiash'],'');
    // ele.innerHTML = _.join(['hellow webpack','5 cubed is equal to '+ cube(5)],'');
    // ele.innerHTML = ['hellow webpack','5 cubed is equal toAABBCC'+ cube(5)].join('\n\n');
    // console.log('__:',_);
    // ele.classList.add('hellow');
    // var myIcon = new Image();
    // myIcon.src=Icon;
    // ele.appendChild(myIcon)
    // ele.onclick = printA;
    // myIcon.onclick = printB;
    // return ele;
};
component().then(component=>{
document.body.appendChild(component);

})
// document.body.appendChild(component());