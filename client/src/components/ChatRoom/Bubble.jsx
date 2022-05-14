import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function Bubble(props) {
    return (
      <div className="flex justify-between items-center">
        {/* Avatar */}
        <div className="w-16 h-16">
          <Avatar
            src="/avatar.jpg"
            alt="avatar"
            className="w-full h-full rounded-full"
            />
        </div>

        {/* Bubble */}
        <div className="flex flex-col justify-between items-start">
          {/* Text */}
          <div className="">

          </div>

          {/* Time */}
          <div className="text-sm text-gray-400 mt-4">

          </div>
        </div>
      </div>
    );
}
