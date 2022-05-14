import React from 'react';
import classNames from 'classnames';
import { Icon } from '@mui/material';

export default function Option(props) {
    const { icon, title, onClick } = props;
    return (
      <div
        className={
            classNames(
                'flex justify-between items-center w-full rounded-l-full rounded-r-full px-4 py-2 my-1 cursor-pointer',
                'hover:bg-primary-brown-hover'
        )}
        onClick={onClick}
      >
        <div className="flex items-center">
          <Icon
            baseClassName="fas"
            className={icon}
            fontSize="small"
            />
          <div className="ml-4">{title}</div>
        </div>
      </div>
    );
}
