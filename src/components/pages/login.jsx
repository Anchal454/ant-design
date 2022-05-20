import { Form, Input, Button ,Row ,Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	let navigate = useNavigate();

	const onFinish = (values) => {
		console.log('Success:', values);
		localStorage.setItem('IsLogin', JSON.stringify(true));
		let userInfo = JSON.parse(localStorage.getItem('user-info'));
		console.log(userInfo);
		if(userInfo.username === values.username && userInfo.Password === values.Password){
			navigate("/");
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (

		<div className="container">
			<Row>
				<Col span={8} offset={8}>
					<h1 className='main-head text-center pt-5'>Sign in</h1>
					<Form
						name="basic"
						layout="vertical"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
					
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									message: 'Please input your username!',
								},
							]}
						> 
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									message: 'Please input your password!',
								},
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item>
							<Button htmlType="submit" className='main-btn'>
								Sign Up
							</Button>
						</Form.Item>

					</Form>
					<p className='text-center'>Don't have an account ? <Link to="/sign-up" className='text-decoration-none'> Sign up Here</Link></p>
				</Col>
			</Row>
		</div>

	);
};

export default Login;