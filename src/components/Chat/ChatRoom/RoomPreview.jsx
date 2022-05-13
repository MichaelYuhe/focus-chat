import React from 'react';
import { useSnapshot } from 'valtio';
import rooms from '../../../store/room';

export default function RoomPreview(props) {
  const roomsSnap = useSnapshot(rooms);

  const selectedRoom = roomsSnap.rooms.find(room => room.roomName === roomsSnap.selectedRoom);

  return (
    <div className="w-full h-full">
      {
        selectedRoom &&
        <h1>{selectedRoom.name}</h1>
      }
    </div>
  );
}
