import React from 'react'
import { Reset, useConfig } from 'appwrite-web-react';
import { account } from '../../utils/utils';

function reset() {
  return (
    <div>
      <Reset 
        theme="light" 
        account={account} 
        routePush='/room' 
      />
    </div>
  )
}

export default reset