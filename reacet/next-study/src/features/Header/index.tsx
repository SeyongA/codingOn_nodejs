import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';

const Header = () => {
  const router = useRouter();
  const path = router.asPath;

  
  return (
    // path === "/login"? <></> :
    <HeaderStyled>
      <div className={` ${path === "/login" ? "noneHead" : "nav"}`}>
        <div className="navBox">
          <div onClick={()=> {router.push('/join')}}>회원가입</div>
          <div onClick={()=> {router.push('/login')}}>로그인</div>
          <div onClick={()=> {router.push(`/company/${1}`)}}>회사소개</div>
          <div onClick={()=> {router.push(`/list`)}}>게시판</div>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
