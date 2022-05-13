import React from 'react';
import { useSnapshot } from 'valtio';
import { Icon } from '@mui/material';
import rooms from '../../../store/room';

export default function ChatRoom() {
  const roomsSnap = useSnapshot(rooms);

  const currentRoom = roomsSnap.currentRoom;

    return (
      <div className="w-full h-full p-6 flex flex-col items-center">
        <div className="w-full border-b-2 flex justify-between items-center pb-2">
          <div
            className="flex items-center cursor-pointer p-1"
            onClick={() => {
              rooms.currentRoom = undefined;
              rooms.selectedRoom = undefined;
            }}>
            <Icon
              baseClassName="fas"
              className="fa-angle-left"
              fontSize="small"
          />
          </div>

          <div className="font-bold text-xl">{currentRoom.roomName}</div>

          <div className="flex items-center cursor-pointer p-1">
            <Icon
              baseClassName="fas"
              className="fa-bars"
              fontSize="small"
          />
          </div>

        </div>
      </div>
    );
}
