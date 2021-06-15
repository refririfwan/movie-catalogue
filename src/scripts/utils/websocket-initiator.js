/* eslint-disable no-underscore-dangle */
const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    // eslint-disable-next-line no-console
    console.log(message.data);
  },
};
export default WebSocketInitiator;
