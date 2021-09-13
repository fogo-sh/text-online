import { IncomingMessage, AckMessage } from "./types";
import websockets from "./websockets";

const renderMessage = (message: AckMessage) => {
  return `
    <div class="message">
        Mitch: ${message.message}
    </div>
  `;
};

const render = (message: IncomingMessage) => {
  switch (message.type) {
    case "ack":
      return renderMessage(message);
    default:
      throw new Error(`Unknown message type ${message.type}`);
  }
};

const chatOutput = () => {
  const chat = document.createElement("div");
  chat.className = "chat";

  websockets.client.onmessage = function (event: MessageEvent) {
    chat.innerHTML = chat.innerHTML + render(JSON.parse(event.data));
  };

  return chat;
};

export default chatOutput;
