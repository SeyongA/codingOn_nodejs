import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import './style.css';

const Login = (props) => {
  const [data, setData] = useState();

  const dataFormik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },

    onSubmit: (values) => {
      setData(values);
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={dataFormik.handleSubmit}>
        <div>
          이메일:
          <Input name="email" onChange={dataFormik.handleChange} />
        </div>
        <div>
          패스워드:
          <Input name="pass" onChange={dataFormik.handleChange} />
        </div>
        <Button htmlType="submit">React 실행!</Button>
        <br />
      </form>
      {data ? (
        <div>
          <div> 아이디 : {data.email}</div>
          <div> 비밀번호 : {data.pass}</div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Login;