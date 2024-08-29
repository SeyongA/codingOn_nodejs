import { useRouter } from "next/router";

const Company = () =>{ 
  const router = useRouter();
  const {id} = router.query;
  return <div style={{marginTop : 100}}>회사소개{id}</div>
}
export default Company;
