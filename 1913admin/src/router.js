import React,{Component} from 'react'
import ComponentImport from  './utils/componentImport'
// 引入路由懒加载的处理方法
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import CustomNav from  './component/customNav'
// import Login from './component/login/load'
// 将需要路由懒加载的组件 作为第一个参数
const Login = ComponentImport(()=>import('./component/login'))
const Admin = ComponentImport(()=>import('./component/admin'))
const User = ComponentImport(()=>import('./component/user'))
const Home = ComponentImport(()=>import('./component/home'))
class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'/>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin'render={()=>{
                        return(
                        <Admin>
                            <CustomNav></CustomNav>
                            <Route path='/admin/home' component={Home}/>
                            <Route path='/admin/user' component={User}/>
                        </Admin> 
                        )
                        }}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default  RootRouter