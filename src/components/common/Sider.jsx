import React ,{useState }from 'react'
import { Menu, Layout, Avatar, Space, } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import {
	AppstoreOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
	UserAddOutlined,
	HomeOutlined,
	UserOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const SiderCus = ({collapsed,setCollapsed}) => {
const [current, setCurrent] = useState('log1')

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} >
					<div>
						<Space className={collapsed ?"smallpic":'pic'}>
							{collapsed ? <Avatar style={{ backgroundColor: '#87d068' }} size={50} icon={<UserOutlined />} /> :
							<Avatar style={{ backgroundColor: '#87d068' }} size={100} icon={<UserOutlined />} /> 
		}
						</Space>
						<Menu
							defaultSelectedKeys={[current]}
							// defaultOpenKeys={['']}
							mode="inline"
							theme="dark"
							inlineCollapsed={collapsed}
						>

							<Menu.Item key="log1" icon={<HomeOutlined />}>
								<NavLink className="nav-link" to="/" activeclassname="active">
									Home
								</NavLink>
							</Menu.Item>

							<Menu.Item key="add" icon={<UserAddOutlined />}>
								<Link to="/add-user">
								Add User
								</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<DesktopOutlined />}>
								Option 2
							</Menu.Item>
							<Menu.Item key="3" icon={<ContainerOutlined />}>
								Option 3
							</Menu.Item>
							<Menu.Item key="4" icon={<PieChartOutlined />}>
								Option 1
							</Menu.Item>
							<Menu.Item key="5" icon={<DesktopOutlined />}>
								Option 2
							</Menu.Item>
							<Menu.Item key="6" icon={<ContainerOutlined />}>
								Option 3
							</Menu.Item>
							<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
								<Menu.Item key="7">Option 5</Menu.Item>
								<Menu.Item key="8">Option 6</Menu.Item>
								<Menu.Item key="9">Option 7</Menu.Item>
								<Menu.Item key="10">Option 8</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
								<Menu.Item key="11">Option 9</Menu.Item>
								<Menu.Item key="12">Option 10</Menu.Item>

							</SubMenu>
						</Menu>
					</div>
				</Sider>
  )
}

export default SiderCus