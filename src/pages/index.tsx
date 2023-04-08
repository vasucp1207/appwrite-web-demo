import { SignInEmail } from 'appwrite-web-react';
import "react-toastify/dist/ReactToastify.css";
import { account } from '../../utils/utils';

export default function Home() {
  return (
    <div>
      <SignInEmail 
        account={account} 
        theme='light' 
        routePush='/room'
        routeSign='http://localhost:3000/'
        routeRst='http://localhost:3000/reset'
      />
    </div>
  )
}
