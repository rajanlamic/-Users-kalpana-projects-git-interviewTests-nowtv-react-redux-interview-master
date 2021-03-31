import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

const Message = ({ message, avatar, timestamp, email }) => {
  return (
    <li className="message">
      <div title={email}>{message}</div>
      <div>
        <img src={avatar} alt={avatar} />
      </div>
      <div>{moment.utc(timestamp).format('DD-MM-YYYY HH:mm')}</div>
    </li>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  avatar: PropTypes.string,
  timestamp: PropTypes.string,
  email: PropTypes.string,
};

export default Message;
