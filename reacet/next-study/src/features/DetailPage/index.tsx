import Detail from '@/components/Detail';
import { data1, data2, data3 } from '@/utill';
import { useEffect, useState } from 'react';

interface DataProps {
  id? : string | string[]
}

const ShoppingPage = ({ id }: DataProps) => {
  const [data, setData] = useState<any>();
  const bigData = [...data1, ...data2, ...data3];


  useEffect(()=>{
    const filterData = bigData.filter((item)=> item.id === Number(id))
    setData(filterData[0]);
  },[id]);


  return (
    <>
      <Detail data={data}/> 
    </>
  );
};

export default ShoppingPage;
