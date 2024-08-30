import { useRouter } from 'next/router';

interface DataProps {
  data: {
    id: number;
    src: {
      src: string;
    };
    name: string;
    price: number;
    hash?: [{ tag: string }];
  };
}

const Main = ({ data }: DataProps) => {
  const router = useRouter();
  const routingPage = (type: string) => {
    router.push(`/shopping/detail/${type}`);
  };

  return (
    <>
      <div
        className="dataDiv"
        key={data.id}
        onClick={() => {
          routingPage(`${data.id}`);
        }}
      >
        <img src={data.src.src} alt="" />
        <p>상품명 : {data.name}</p>
        <p>가격 : {data.price}</p>
        <div className="spanDiv">
          {data?.hash?.map((x: any, i: number) => {
            return <span key={i}>#{x.tag}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;