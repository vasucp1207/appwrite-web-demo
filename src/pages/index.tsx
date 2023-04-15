import { SignInEmail, SignInOauth } from 'appwrite-web-react';
import "react-toastify/dist/ReactToastify.css";
import { account } from '../../utils/utils';
import { useState } from 'react';

export default function Home() {
  const [oath, setOath] = useState(false);
  return (
    <div className='relative'>
      <button
        onClick={() => setOath(p => !p)}
        className='absolute right-1 z-10 top-1 w-10 h-10 rounded-[100px] bg-[#f02d64]'></button>

      <button
        onClick={() => window.location.href = '/reset'}
        className='absolute right-1 z-10 top-12 w-10 h-10 rounded-[100px] bg-[#f02d64]'></button>
      {!oath && <SignInEmail
        account={account}
        theme='light'
        routePush='/room'
        routeSign='http://localhost:3000/'
        routeRst='http://localhost:3000/reset'
      />}

      {oath && <SignInOauth account={account} theme='light' />}
    </div>
  )
}
