import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@mui/material';
import RoomPreview from './RoomPreview';

export default function SideBar(props) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const rooms = [
    {
      roomName: 'JavaScript',
      activePeople: 55
    },
    {
      roomName: 'Python',
      activePeople: 5
    },
    {
      roomName: 'React',
      activePeople: 99
    },
    {
      roomName: 'Pokemon',
      activePeople: 1276
    },
  ];
    return (
      <div
        className="w-1/5 border-r-2 h-full rounded-3xl p-4
      flex flex-col">
        <div className="flex flex-col w-full">
          <div className="h-10 w-10">
            <Avatar
              src="/avatar.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="text-sm font-bold mt-2">
            Michale Yuhe
          </div>
          <div className="text-xs text-gray-500 mb-2">
            status
          </div>
        </div>
        <div className="flex flex-col w-full text-sm">

          <div
            className="flex justify-between items-center w-full rounded-l-full rounded-r-full px-4 py-2 my-1 cursor-pointer
          hover:bg-primary-hover-light">
            <div className="flex items-center">
              <Icon
                baseClassName="far"
                className="fa-comment"
                fontSize="small"
                />
              <div className="ml-4">Create Room</div>
            </div>
          </div>

          <div
            className="flex justify-between items-center w-full rounded-l-full rounded-r-full px-4 py-2 my-1 cursor-pointer
          hover:bg-primary-hover-light">
            <div className="flex items-center">
              <Icon
                baseClassName="fas"
                className="fa-fill"
                fontSize="small"
                />
              <div className="ml-4">Change Color</div>
            </div>
          </div>

          <div
            className="flex justify-between items-center w-full rounded-l-full rounded-r-full px-4 py-2 my-1 cursor-pointer
          hover:bg-primary-hover-light">
            <div className="flex items-center">
              <Icon
                baseClassName="fas"
                className="fa-dice-three"
                fontSize="small"
                />
              <div className="ml-4">Random Room</div>
            </div>
          </div>

        </div>
        <div className="flex flex-col mt-4">
          <div className="font-bold text-lg mb-2">Rooms</div>
          {
            rooms.map(room => {
              return <RoomPreview
                key={room.roomName}
                roomName={room.roomName}
                activePeople={room.activePeople}
              />;
            })
          }
        </div>
      </div>
    );
}