import React from 'react';
import { useSnapshot } from 'valtio';
import { Button } from '@mui/material';
import rooms from '../../store/room';
import system from '../../store/system';

export default function RoomPreview() {
  const roomsSnap = useSnapshot(rooms);

  const selectedRoom = roomsSnap.selectedRoom;

  return (
    <div className="w-full h-full p-6">
      {
        selectedRoom ?
          <div className="w-full h-full flex flex-col items-center justify-between">
            <div className="flex flex-col w-full items-center">
              <div className="font-bold text-2xl mb-4">{selectedRoom.roomName}</div>
              <div className="whitespace-pre-line">{selectedRoom.intro}</div>
            </div>

            <div className="flex w-full justify-between">
              <div className="flex flex-col w-1/2 px-4 items-center">
                <div className="font-bold text-lg mb-4">Room Rules</div>
                <div className="w-full my-2 rounded-full flex justify-center">
                  Clock Time : {selectedRoom.rules['clockTime']} minutes.
                </div>
                <div className="w-full my-2 rounded-full flex justify-center">
                  Message Interval : {selectedRoom.rules['messageInterval']} seconds.
                </div>
                <div className="w-full my-2 rounded-full flex justify-center">
                  Room Capcity : {selectedRoom.rules['maxPeople']} people.
                </div>

              </div>

              <div className="flex flex-col w-1/2 items-center">
                <div className="font-bold text-lg">Room Infor</div>

              </div>
            </div>

            <Button
              variant="text"
              onClick={() => {
                rooms.currentRoom = selectedRoom;
                system.room = selectedRoom;
              }}
              >Enter</Button>
          </div> :
          <div className="w-full h-full flex flex-col items-center justify-center">
            Select a chat room, and enjoy the journey.
          </div>
      }
    </div>
  );
}

