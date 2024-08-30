import { DetailPageStyled } from "./styled";

interface DataProps {
  data: {
    id: number;
    src: {
      src: string;
    };
    name: string;
    price: number;
    hash?: [{ tag?: string }];
  };
}

const Detail = ({ data }: DataProps) => {
  return (
    <>
      <DetailPageStyled>
        <div style={{ marginTop: 100 }}>
          <img src={data?.src.src} alt="" />
          <div className="dataInfo">
            <h2>상품명 : {data?.name}</h2>
            <h3>가격 : {data?.price}</h3>
            <div>
              {data?.hash?.map((x, i) => {
                return <span key={i}>#{x.tag}</span>  
              })}
            </div>
          </div>
        </div>
      </DetailPageStyled>
    </>
  );
};

export default Detail;
