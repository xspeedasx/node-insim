import { byte, char } from '../utils';
import { BaseSendablePacket } from './BaseSendablePacket';
import { PacketType } from './enums';
import type { PacketData } from './types';

/**
 * MSg Type - send to LFS to type message or command
 */
export class IS_MST extends BaseSendablePacket {
  @byte() readonly Size = 68;
  @byte() readonly Type = PacketType.ISP_MST;
  @byte() readonly ReqI: 0 = 0;
  @byte() readonly Zero: 0 = 0;

  /** Last byte must be zero */
  @char(64) Msg = '';

  constructor(data?: IS_MST_Data) {
    super();
    this.initialize(data);
  }
}

export type IS_MST_Data = Required<PacketData<IS_MST>>;