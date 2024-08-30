import ShoppingPage from '@/features/ShoppingPage'
import { useRouter } from 'next/router';

export default function Shopping() {
  const router = useRouter();
  const {id} = router.query;
  
  return (
    <>
      <ShoppingPage id={id}/>
    </>
  );
}
