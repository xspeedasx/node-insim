import { byte } from '../utils';
import { BasePacket } from './BasePacket';
import { PacketType } from './enums';

/**
 * Car ReSet
 */
export class IS_CRS extends BasePacket {
  @byte() readonly Size = 4;
  @byte() readonly Type = PacketType.ISP_CRS;
  @byte() readonly ReqI: 0 = 0;

  /** Player's unique id */
  @byte() PLID = 0;
}