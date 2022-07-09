import moment from 'moment';

export interface Message {
  username: string;
  text: string;
  time: string;
}

export function formatMessage(username: string, text: string): Message {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
  };
}
