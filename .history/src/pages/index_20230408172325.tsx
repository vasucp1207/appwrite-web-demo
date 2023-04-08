import { SignInEmail, useConfig } from 'appwrite-web-react';
import "react-toastify/dist/ReactToastify.css";
import { account } from '../../utils/utils';

export default function Home() {
  return (
    <div>
      <SignInEmail 
        account={account} 
        theme='light' 
        routePush='/room'
        routeSign='https://amazing-cocada-e388a8.netlify.app/'
        routeRst='http://localhost:3000/reset'
      />
    </div>
  )
}
