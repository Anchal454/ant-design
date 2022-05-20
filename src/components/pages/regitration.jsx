import { Form, Input, Button ,Row ,Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Regitration = () => {
	let navigate = useNavigate();


	const onFinish = (values) => {
		console.log('Success:', values);
		const data = { username: values.username, password: values.password}
		localStorage.setItem('user-info', JSON.stringify(data));
		navigate("/sign-in");
		
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


	return (
		<>
			<div className="container">
			<Row>
				<Col span={8} offset={8}>
				<h1 className='main-head text-center pt-5'>Sign up	</h1>
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

						<Form.Item	>
							<Button className='main-btn' htmlType="submit" >
								Sign Up
							</Button>


						</Form.Item>

					</Form>
					<p className="text-center">Don't have an account ? <Link to="/sign-in" className='text-decoration-none'> Sign in Here</Link></p>
				</Col>
			</Row>
		</div>
		</>
	)
}

export default Regitration;