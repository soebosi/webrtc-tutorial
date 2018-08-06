const peerConnection = new RTCPeerConnection();

const dataChannel = peerConnection.createDataChannel("label", {
  ordered: false,
  maxRetransmitTime: 3000,
});

dataChannel.onerror = (error) => {
  console.error(error);
};

dataChannel.onmessage = (event) => {
  console.log(`message: ${event.data}`);
};

dataChannel.onopen = () => {
  dataChannel.send("Hello");
};

dataChannel.onclose = () => {
  console.log("The data channel is closed");
};
