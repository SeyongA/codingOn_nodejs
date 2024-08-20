import MainPage from '../MainPage';
import { Select } from 'antd';
import './header.css';

const Header = (props) => {
  const { data1, data2, data3, setType, Type } = props;
  const option = [
    { label: 'Data 1', value: 'data1' },
    { label: 'Data 2', value: 'data2' },
    { label: 'Data 3', value: 'data3' },
  ];
  const handleChange = (value) => {
    value === 'data1' ? setType(data1) : value === 'data2' ? setType(data2) : setType(data3);
  };
  return (
    <>
      <header>
        <div>
          <Select id="ab" style={{ width: 150 }} onChange={handleChange} options={option} defaultValue={option[0]} />
        </div>
      </header>
      <MainPage type={Type} />
    </>
  );
};

export default Header;
