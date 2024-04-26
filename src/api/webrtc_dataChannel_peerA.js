const localConnection = new RTCPeerConnection();
const answer = { /* whatever */ };
const dataChannel = localConnection.createDataChannel("channel");
dataChannel.onmessage = (evt) => {
  console.log(evt.data);
};
dataChannel.onopen = (evt) => {
  console.log('Connection opened on local');
};
localConnection.onicecandidate = (evt) => {
  console.log('iceCandidated on local');
  console.log(JSON.stringify(localConnection.localDescription));
};
localConnection.createOffer().then(offer => {
  localConnection.setLocalDescription(offer);
}).then(() => console.log('setLocalDescription Success on local'));
localConnection.setRemoteDescription(answer)
.then(() => console.log('setRemoteDescription Success on local'));
dataChannel.send("Heyo Peer B");