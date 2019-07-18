import Menus from './menuConfig';
import { Menu, Icon, } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

let menuArr = []
Menus.forEach((item,i)=>{
    if(item.children){
        menuArr.push(
            <SubMenu
                key={item.key}
                title={
                    <span>
                  <Icon type={item.icon} />
                  <span>{item.menuName}</span>
                </span>
                }
            >
                { menuItem(item.children)}
            </SubMenu>
        )
    }else{
        menuArr.push(

                <Menu.Item key={item.key}>
                    <Link to={item.path}>
                        <Icon type={item.icon} />
                        <span>{item.menuName}</span>
                    </Link>
                </Menu.Item>


        )
    }
})

function menuItem(arr) {
    return arr.map((item,i)=>{
        return (

                <Menu.Item key={item.key}>
                    <Link to={item.path}>
                        {item.menuName}
                    </Link>
                </Menu.Item>
        )
    })
}
function renderMenus(){
    return menuArr.map((item,i)=>{
        return (
            item
        )
    })
}


export default renderMenus()
