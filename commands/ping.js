module.exports = (client, message, args) => {
  message.channel.send('Pong...').then((msg) => {
    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  });
};
