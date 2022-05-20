import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Layout, Row, Col } from 'antd';

import SiderCus from '../common/Sider';
import { HeaderCus } from '../common/Header';

const {Content } = Layout;

const Home=()=> {
	const [collapsed , setCollapsed] =useState(false)	
	
		return (
			<Layout>
				<SiderCus collapsed={collapsed}/>
				<Layout className="site-layout">
					<HeaderCus setCollapsed={setCollapsed} collapsed={collapsed} />

					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}
					>
						<div className="container">
							<Row>
								<Col span={12} offset={6}>
									<div>
										<h1 className='main-head text-center'>Welcome</h1>
										
									</div>

									<Button type="danger" htmlType="submit" shape="round" >
										LogOut
									</Button>
									<p>Don't have an account ? <Link to="/sign-up" className='text-decoration-none'> Sign up Here</Link></p>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</Layout>


		);
	
}

export default Home;