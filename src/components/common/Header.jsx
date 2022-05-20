import React, { useState } from 'react'
import { Menu, Layout,Dropdown,Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export const HeaderCus = ({collapsed,setCollapsed}) => {
  const nav = useNavigate();
  const toggle = () => {
    setCollapsed(value => !value);
  };
  const logout = () => {
		localStorage.removeItem("islogin");
		nav('/sign-in')
	}

  const userMenu = (
    <Menu>
      <Menu.Item key="pro">Profile</Menu.Item>
      <Menu.Item key="out" onClick={logout}>Logout</Menu.Item>
    </Menu>
  );
  let user = JSON.parse(localStorage.getItem('user-info'));
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
						<div className="profile">
							{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: toggle,
							})}

							<Menu>
							
								<Dropdown overlay={userMenu}>
									<Space>
										<UserOutlined /> {user.username}
										<DownOutlined />
									</Space>
								</Dropdown>
							</Menu>
						</div>
					</Header>
  );
}