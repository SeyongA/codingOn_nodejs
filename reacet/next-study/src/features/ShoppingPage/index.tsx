import { data1, data2, data3 } from '@/utill';
import Main from '@/components/Main';
import { MainPageStyled } from '@/components/Main/styled';

interface DataProps {
  id?: string | string[]
}

const ShoppingPage = ({ id }: DataProps) => {
  const bigData = [...data1, ...data2, ...data3];
  console.log(id);
  
  return (
    <MainPageStyled>
      <main>
        {id === '1'
          ? data1?.map((x: any) => <Main data={x} key={x.id} />)
          : id === '2'
          ? data2?.map((x: any) => <Main data={x} key={x.id} />)
          : data3?.map((x: any) => <Main data={x} key={x.id} />)}
      </main>
    </MainPageStyled>
  );
};

export default ShoppingPage;
