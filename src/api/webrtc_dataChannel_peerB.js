const remoteConnection = new RTCPeerConnection();
const offer = { /* whatever */ };
remoteConnection.onicecandidate = (evt) => {
  console.log('IceCandidated on remote');
  console.log(JSON.stringify(remoteConnection.localDescription));
};
remoteConnection.ondatachannel = (evt) => {
  remoteConnection.dataChannel = evt.channel;
  remoteConnection.dataChannel.onmessage = (evt) => {
    console.log(evt.data);
  };
  remoteConnection.dataChannel.onopen = (evt) => {
    console.log('Connection opened on remote');
  }
}
remoteConnection.setRemoteDescription(offer)
.then(() => console.log('setRemoteDescription Success on remote'));
remoteConnection.createAnswer().then(answer => {
  remoteConnection.setLocalDescription(answer);
}).then(() => console.log('setLocalDescription Success on remote'));