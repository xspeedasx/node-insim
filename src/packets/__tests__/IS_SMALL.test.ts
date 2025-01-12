import { testInstructionPacket } from '../../tests';
import type { IS_SMALL_Data } from '..';
import { IS_SMALL, PacketType, SmallType } from '..';

const size = 8;

const data: IS_SMALL_Data = {
  ReqI: 1,
  SubT: SmallType.SMALL_NLI,
  UVal: 257,
};

const buffer = new Uint8Array([
  size / new IS_SMALL().SIZE_MULTIPLIER, // Size
  4, // Type
  1, // ReqI
  7, // SubT
  1, // UVal (1)
  1, // UVal (2)
  0, // UVal (3)
  0, // UVal (4)
]);

describe('IS_SMALL', () => {
  testInstructionPacket({
    packetClass: IS_SMALL,
    size,
    type: PacketType.ISP_SMALL,
    data,
    buffer,
  });
});
