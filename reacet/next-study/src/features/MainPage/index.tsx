import { data1, data2, data3 } from '@/utill';
import Main from '@/components/Main';
import { MainPageStyled } from '@/components/Main/styled';

const MainPage = () => {
  const bigData = [...data1, ...data2, ...data3];

  return (
    <MainPageStyled>
      <main>
        {bigData?.map((x: any) => (
          <Main data={x} key={x.id} />
        ))}
      </main>
    </MainPageStyled>
  );
};

export default MainPage;
