import { Button } from 'antd';
import { useRouter } from 'next/router';

const List = () => {
  const router = useRouter();
  return (
    <>
      <div style={{ marginTop: 100 }}>게시판 입니다</div>
      <Button
        onClick={() => {
          router.push(router.asPath + '/bord');
        }}
      >
        글쓰기
      </Button>
    </>
  );
};

export default List;
