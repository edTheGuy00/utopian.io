import { Client } from 'busyjs';

const client = new Client('ws://blockchainbi.org:4000');

client.sendAsync = (message, params) =>
  new Promise((resolve, reject) => {
    client.call(message, params, (err, result) => {
      if (err !== null) return reject(err);
      return resolve(result);
    });
  });

export default client;
