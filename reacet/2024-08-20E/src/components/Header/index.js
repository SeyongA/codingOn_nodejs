import { Select } from 'antd';
import './header.css';

const Header = (props) => {
  const {setType} = props;
  const option = [
    { label: 'Data 1', value: 'data1' },
    { label: 'Data 2', value: 'data2' },
    { label: 'Data 3', value: 'data3' },
  ];
  return (
    <>
      <header>
        <div>
          <Select id="ab" style={{ width: 150 }} onChange={(value)=>{setType(value)}} options={option} defaultValue={option[0]} />
        </div>
      </header>

    </>
  );
};

export default Header;
