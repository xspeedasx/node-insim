import NodeInSim, { PacketType } from '../index';
import { IS_ISI_ReqI } from '../packets/IS_ISI';
import { IS_VER } from '../packets/IS_VER';
import { InSim } from '../protocols/InSim';

const inSim = new NodeInSim.InSim();

inSim.connect({
  Host: '10.0.0.100',
  Port: 29998,
  ReqI: IS_ISI_ReqI.REQI_SEND_VERSION,
  IName: 'Test Node App',
});

function onVersion(packet: IS_VER, insim: InSim) {
  console.log('LFS version', packet.Version);
}

inSim.on(PacketType[PacketType.ISP_VER], onVersion);
inSim.on('error', (error) => {
  console.error('Error:', error);
});
