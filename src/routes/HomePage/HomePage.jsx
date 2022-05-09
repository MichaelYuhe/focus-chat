import Button from '@mui/material/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'


export default function HomePage(props) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='home-page'>
            <h1>HomePage</h1>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
            <Link
                onClick={() => { }}
                to={`/chat?name=${name}&room=${room}`}
            >
                <Button>Sign In</Button>
            </Link>
        </div>
    );
}

