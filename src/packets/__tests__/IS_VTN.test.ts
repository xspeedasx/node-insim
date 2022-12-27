import { IS_VTN, PacketType, VoteAction } from '..';
import { BasePacket } from '../BasePacket';

describe('IS_VTN', () => {
  it('should unpack data from a buffer', () => {
    const buffer = Buffer.from([
      8 / BasePacket.SIZE_MULTIPLIER, // Size
      PacketType.ISP_VTN, // Type
      0, // ReqI
      0, // Zero
      3, // UCID
      VoteAction.VOTE_QUALIFY, // Action
      0, // Spare2
      0, // Spare3
    ]);
    const packet = new IS_VTN().unpack(buffer);

    expect(packet.Size).toEqual(8);
    expect(packet.Type).toEqual(PacketType.ISP_VTN);
    expect(packet.ReqI).toEqual(0);
    expect(packet.Zero).toEqual(0);
    expect(packet.UCID).toEqual(3);
    expect(packet.Action).toEqual(VoteAction.VOTE_QUALIFY);
    expect(packet.Spare2).toEqual(0);
    expect(packet.Spare3).toEqual(0);
  });
});