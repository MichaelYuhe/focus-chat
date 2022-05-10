import React from 'react';
import Button from '@mui/material/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function HomePage(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
      <div className='flex w-full h-full justify-center'>
        <div className='text-xl font-bold'>HomePage</div>

        <Link
          onClick={() => { }}
          to={`/chat?name=${name}&room=${room}`}
            >
          <Button>Chat</Button>
        </Link>
        <Link
          onClick={() => { }}
          to={'/sign'}>
          <Button>Sign</Button>
        </Link>
      </div>
    );
}

