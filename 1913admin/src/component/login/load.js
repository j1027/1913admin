import React from 'react';
import Loadable from 'react-loadable';
// 路由懒加载的插件
import './loader.less'
//通用的过场组件
const loadingComponent =()=>{
    return (
      <div>
        <div className='test'>loading</div>
       
      </div>
    ) 
}

// Loadable hoc 抛出的是一个组件
export default Loadable({
    loader:()=>import('./index.js'),
    //需要被懒加载的组件
    loading:loadingComponent
    //在加载过程中显示的过场组件
});