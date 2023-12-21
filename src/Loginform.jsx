import React, { useEffect, useState } from 'react'
import { Divider } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import './Loginform.scss'


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 32,
    },
};
const formTailLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
        offset: 4,
    },
};
function Loginform() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (

        < >
            <div className='container py-1 bg-tertiary'>

                <div className='form py-4 row justify-content-center'>
                    <div className='col-md-12 col-lg-10 rounded'>
                        <div className='d-md-flex wrap border rounded '>


                            <img src="1.jpg" className="img" alt="..." />

                            <div className='container'>
                                <div >
                                    <Divider>
                                        <img src="logo1.png" width='40' alt="" />
                                    </Divider>

                                </div>
                                <div className='d-flex ps-1 pb-3 flex-column justify-content-center'>
                                    <h3 className='ps-xl-5 ps-lg-4 ms-lg-3 ms-sm-1'>Register</h3>
                                    <div className='form ps-xl-5 ps-lg-4 ms-lg-3 ms-sm-1' >
                                        <Form
                                            form={form}
                                            name="dynamic_rule"
                                            style={{
                                                maxWidth: 600,
                                            }}

                                        >
                                            <Form.Item
                                                {...formItemLayout}
                                                name="username"
                                                label="Name/Email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your name',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Please input your name" />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                label="Password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password showCount maxLength={10} />
                                            </Form.Item>
                                            <Form.Item
                                                name="confirm"
                                                label="Confirm Password"
                                                dependencies={['password']}
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please confirm your password!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password showCount maxLength={10} />
                                            </Form.Item>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                className="avatar-uploader"
                                                showUploadList={true}
                                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                                beforeUpload={beforeUpload}
                                                onChange={handleChange}
                                            >
                                                {imageUrl ? (
                                                    <img
                                                        src={imageUrl}
                                                        alt="avatar"
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                    />
                                                ) : (
                                                    uploadButton
                                                )}
                                            </Upload>
                                        </Form>
                                    </div>
                                    <Divider>
                                        <i role='button' className="bi bi-box-arrow-left"></i>
                                    </Divider>
                                </div>
                                {/*sign-in*/}
                                {/* <div className='d-flex ps-1 pb-3 flex-column justify-content-center'>
                                    <h3 className='ps-xl-5 ps-lg-4 ms-lg-3 ms-sm-1'>Sign-In</h3>
                                    <div className='form ps-xl-5 ps-lg-4 ms-lg-3 ms-sm-1' style={inputStyle}>
                                        <Form
                                            name="normal_login"
                                            className="login-form"
                                            initialValues={{
                                                remember: true,
                                            }}
                                            onFinish={onFinish}
                                        >
                                            <Form.Item
                                                name="username"

                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Username!',
                                                    },
                                                ]}
                                            >
                                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                            </Form.Item>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Password!',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>
                                            </Form.Item>

                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button">
                                                    Log in
                                                </Button>

                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="login-form-button">
                                                    Face-ID <span className='opacity-0'>_</span> <i class="bi bi-person-bounding-box"></i>
                                                </Button>
                                                Or <a href="">register now!</a>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                    <Divider>
                                        <i role='button' className="bi bi-box-arrow-left"></i>
                                    </Divider>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginform
