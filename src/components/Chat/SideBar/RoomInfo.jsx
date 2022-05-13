import React from 'react';
import rooms from '../../../store/room';

export default function RoomInfo(props) {
  const { roomName, activePeople } = props;
    return (
      <div
        className="flex flex-col w-full rounded-l-full rounded-r-full border-2 px-3 py-1
      my-1 cursor-pointer"
        onClick={() => {rooms.selectedRoom = roomName;}}
      >
        <div className="font-bold mb-1">{roomName}</div>
        <div className="text-xs text-gray-400">{activePeople + ' people talking...'}</div>
      </div>
    );
}
