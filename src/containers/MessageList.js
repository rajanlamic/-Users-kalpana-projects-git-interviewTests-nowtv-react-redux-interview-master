import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/message';

import { getMessage } from '../actions/message';
import { getMember } from '../actions/member';

import selectMessageResponse from '../selectors/message';
import selectMemberResponse from '../selectors/member';

const MessageList = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessageResponse);
  const members = useSelector(selectMemberResponse);

  useEffect(() => {
    Promise.all([dispatch(getMessage()), dispatch(getMember())]);
  }, []);

  return (
    <ul>
      {messages.isPending && <div>Pending....</div>}
      {messages.isSuccess &&
        messages.data
          .sort((o1, o2) => new Date(o1.timestamp) - new Date(o2.timestamp))
          .map((message) => {
            const member =
              members.isSuccess &&
              members.data.find((member) => {
                return member.id === message.userId;
              });

            const { avatar = '', email = '' } = member;

            return (
              <Message
                key={message.id}
                message={message.message}
                avatar={String(avatar)}
                timestamp={message.timestamp}
                email={email}
              />
            );
          })}
    </ul>
  );
};

export default MessageList;
