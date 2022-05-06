import { BasePacket } from '../BasePacket';
import { ButtonClickFlags, IS_BTC } from '../IS_BTC';
import { ButtonInstFlags } from '../IS_BTN';
import { PacketType } from '../packetTypes';

describe('IS_BTC', () => {
  it('should unpack data from a buffer', () => {
    const buffer = Buffer.from([
      8 / BasePacket.SIZE_MULTIPLIER, // Size
      PacketType.ISP_BTC, // Type
      1, // ReqI
      2, // UCID
      3, // ClickID
      ButtonInstFlags.INST_ALWAYS_ON, // Inst
      ButtonClickFlags.ISB_RMB, // CFlags
      0, // Sp3
    ]);
    const packet = new IS_BTC(buffer);

    expect(packet.Size).toEqual(8);
    expect(packet.Type).toEqual(PacketType.ISP_BTC);
    expect(packet.ReqI).toEqual(1);
    expect(packet.UCID).toEqual(2);
    expect(packet.ClickID).toEqual(3);
    expect(packet.Inst).toEqual(ButtonInstFlags.INST_ALWAYS_ON);
    expect(packet.CFlags).toEqual(ButtonClickFlags.ISB_RMB);
    expect(packet.Sp3).toEqual(0);
  });
});