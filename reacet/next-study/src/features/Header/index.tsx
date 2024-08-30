import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';

const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  
  //router 함수 재정의
  const routingPage = (type : string) => {
    const number = type === '상품1' ? 1 : type === "상품2" ? 2 : 3;
    if(type ==="home"){
      router.push('/');
    } else {
      router.push(`/shopping/${number}`)
    }
  }
  
  return (
    // path === "/login"? <></> :
    <HeaderStyled>
      <div className={` ${path === "/login" ? "noneHead" : "nav"}`}>
        <div className="navBox">
          <div onClick={()=> {routingPage('home')}}>Home</div>
          <div onClick={()=> {routingPage('상품1')}}>상품1</div>
          <div onClick={()=> {routingPage('상품2')}}>상품2</div>
          <div onClick={()=> {routingPage('상품3')}}>상품3</div>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
