import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Layout, Row, Col, Form, Input, InputNumber, DatePicker, Select, Checkbox } from 'antd';
import { HeaderCus } from '../common/Header';
import SiderCus from '../common/Sider';

const { Content } = Layout;
const { Option } = Select;

const AddUser = () => {
	const [data, setData] = useState([])
	const [collapsed, setCollapsed] = useState(false)
	const nav = useNavigate();

	const onFinish = (values) => {
		setData({ values })

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name:values.name ,gender:values.gender ,age:values.age ,address:values.address ,city:values.city ,state:values.state ,mobile:values.mobile ,dob:values.dob , email: values.email, password: values.password})
		};
		console.log(values);
		console.log({ name: values.name,email: values.email, password: values.password, userType: "admin" });
		fetch('http://localhost:8040/user', requestOptions)
			.then(response => response.json())
			.then(data => console.log(data.message))
			.catch(err => console.log(err));

	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }} label="+91">
				<Option value="91">+91</Option>
			</Select>
		</Form.Item>
	);

	return (
		<Layout>
			<SiderCus collapsed={collapsed} />
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
							<Col span={12} offset={5}>
								<h1 className='main-head text-center'>Add New User</h1>
								<Form
									name="basic"
									layout="vertical"
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									autoComplete="off"
									scrollToFirstError
									initialValues={{
										prefix: '91',
									}}
								>
									<Form.Item name="name" label="Name" rules={[{ required: true, type: 'text' }]}>
										<Input />
									</Form.Item>
									<Form.Item
										name="phone"
										label="Phone Number"
										rules={[{ required: true, message: 'Please input your phone number!', type: 'mobile' }]}
									>
										<Input maxLength='10' type="tel" addonBefore={prefixSelector} style={{ width: '100%' }} />
									</Form.Item>
									<Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
										<Input />
									</Form.Item>
									<Form.Item
										label="Password"
										name="password"
										rules={[
											{
												required: true,
												message: 'Please input your password!',
												type: 'password'
											},
										]}
									>
										<Input.Password />
									</Form.Item>
									<Form.Item label="Date of Birth" name="birthDate" rules={[{ required: true }]} >
										<DatePicker />
									</Form.Item>
									<Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
										<InputNumber />
									</Form.Item>

									<Form.Item
										label="Address"
										name="address"
										rules={[
											{
												required: true,
												message: 'Please input your Address!',
											},
										]}
									>
										<Input />
									</Form.Item>
									<Form.Item
										label="State"
										name="state"
										rules={[
											{
												required: true,
												message: 'Please input your State!',
											},
										]}
									>
										<Input />
									</Form.Item>
									<Form.Item
										label="City"
										name="city"
										rules={[
											{
												required: true,
												message: 'Please input your City!',
											},
										]}
									>
										<Input />
									</Form.Item>
									<Form.Item
										name="gender"
										label="Gender"
										rules={[
											{
												required: true,
												message: 'Please select gender!',
											},
										]}
									>
										<Select placeholder="select your gender">
											<Option value="male">Male</Option>
											<Option value="female">Female</Option>
											<Option value="other">Other</Option>
										</Select>
									</Form.Item>
									<Form.Item
										name="agreement"
										valuePropName="checked"
										rules={[
											{
												validator: (_, value) =>
													value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
											},
										]}

									>
										<Checkbox>
											I have read the <a href="">agreement</a>
										</Checkbox>
									</Form.Item>


									<Form.Item>
										<Button htmlType="submit" className='main-btn'>
											Add User
										</Button>
									</Form.Item>

								</Form>

							</Col>
						</Row>
					</div>
				</Content>
			</Layout>
		</Layout>


	);

}

export default AddUser;

