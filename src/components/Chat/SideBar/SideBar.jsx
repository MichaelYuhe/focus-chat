import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import RoomInfo from './RoomInfo';
import classNames from 'classnames';
import ui from '../../../store/ui';
import system from '../../../store/system';
import { useNavigate } from 'react-router-dom';
import rooms from '../../../store/room';
import { useSnapshot } from 'valtio';
import Option from './Option';

export default function SideBar(props) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [themeColor, setThemeColor] = useState(0);
  const navigate = useNavigate();

  const roomsSnap = useSnapshot(rooms);

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
            {system.name}
          </div>
          <div className="text-xs text-gray-500 mb-2">
            status
          </div>
        </div>

        <div className="flex flex-col w-full text-sm">
          <Option
            icon="fa-comment"
            title="Create Room"
            onClick={() => {

            }}
          />

          <Option
            icon="fa-fill"
            title="Change Color"
            onClick={() => {

            }}
          />

          <Option
            icon="fa-dice-three"
            title="Random Room"
            onClick={() => {

            }}
          />

          <Option
            icon="fa-angle-left"
            title="Log Out"
            onClick={() => {
              system.name = '';
              navigate('../');
            }}
          />

        </div>

        <div className="flex flex-col mt-4">
          <div className="font-bold text-lg mb-2">Rooms</div>
          {
            roomsSnap.rooms.map(room => {
              return <RoomInfo
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
