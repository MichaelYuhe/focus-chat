import React from 'react';
import rooms from '../../store/room';
import { toast } from 'react-hot-toast';

export default function RoomInfo({ room }) {
    return (
      <div
        className="flex flex-col w-full rounded-l-full rounded-r-full border-2 px-3 py-1
      my-1 cursor-pointer"
        onClick={() => {
          if (rooms.currentRoom) {
            toast.error('Leave current room first');
            return;
          }
          rooms.currentRoom = undefined;
          rooms.selectedRoom = room;
        }}
      >
        <div className="font-bold mb-1">{room.roomName}</div>
        <div className="text-xs text-gray-400">{room.activePeople + ' people talking...'}</div>
      </div>
    );
}
