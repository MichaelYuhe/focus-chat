import React from 'react';

export default function SideBar(props) {
    return (
      <div
        className="w-1/5 border-r-4 h-full rounded-3xl p-4
      flex flex-col">
        <div className="flex flex-col h-28">
          <div>
            avatar
          </div>
          <div>
            name
          </div>
          <div>
            status
          </div>
        </div>
        <div>options</div>
        <div>rooms</div>
        <div>settings</div>
      </div>
    );
}
