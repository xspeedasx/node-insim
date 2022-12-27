import { byte, char, createLog, getFormat, unpack } from '../utils';
import { BasePacket } from './BasePacket';
import { PacketType } from './enums';

const log = createLog('IS_III');

/**
 * InsIm Info - /i message from user to host's InSim - variable size
 */
export class IS_III extends BasePacket {
  private static readonly FIXED_DATA_SIZE = 8;

  @byte() readonly Size = IS_III.FIXED_DATA_SIZE;
  @byte() readonly Type = PacketType.ISP_III;
  @byte() ReqI = 0;
  @byte() readonly Zero: 0 = 0;

  /** Connection's unique id (0 = host) */
  @byte() UCID = 0;

  /** Player's unique id (if zero, use UCID) */
  @byte() PLID = 0;

  @byte() readonly Sp2: 0 = 0;
  @byte() readonly Sp3: 0 = 0;

  /** 4, 8, 12... 64 characters - last byte is zero */
  @char(64) Msg = '';

  unpack(buffer: Buffer): this {
    const data = unpack(`<${getFormat(this, 'Size')}`, buffer);

    if (!data || data.length === 0) {
      log.error('Failed to read packet size');
      return this;
    }

    const size = data[0] * BasePacket.SIZE_MULTIPLIER;
    const msgLength = size - IS_III.FIXED_DATA_SIZE;

    super.unpack(buffer, {
      Msg: `${msgLength}s`,
    });

    return this;
  }
}
