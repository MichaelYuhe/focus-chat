import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ui from '../../store/ui';
import system from '../../store/system';
import classNames from 'classnames';

export default function HomePage(props) {
    const [name, setName] = useState('');
    const [placeholder, setPlaceholder] = useState('Enter Your Name');
    const navigate = useNavigate();

    return (
      <div className="flex w-full h-full justify-center items-center">

        <div
          className={classNames(
            'flex flex-col w-1/3 h-1/3 rounded-3xl justify-around items-center',
            ui.themeColor === 'brown' ? 'bg-primary-brown-main' : ''
          )}>
          <div className="font-bold text-2xl">Focus Chat</div>
          <input
            type="text"
            className="w-80 h-10 text-center bg-primary-brown-hover
            rounded-l-full rounded-r-full"
            placeholder={placeholder}
            onChange={(e) => { setName(e.target.value); }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                if (!name) {
                  toast.error('Please...');
                  setPlaceholder('Please Enter Your Name');
                }
                else {
                  system.name = name;
                  navigate('../chat');
                }
            }}}
        />
        </div>
      </div>
    );
}

