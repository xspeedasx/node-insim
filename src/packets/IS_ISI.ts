import { byte, char, word } from '../utils';
import { AbstractSendablePacket } from './AbstractSendablePacket';
import type { InSimFlags } from './enums';
import { PacketType } from './enums';
import type { PacketDataWithOptionalReqI } from './types';

/**
 * InSim Init - packet to initialise the InSim system
 */
export class IS_ISI extends AbstractSendablePacket {
  @byte() readonly Size = 44;
  @byte() readonly Type = PacketType.ISP_ISI;

  /** If non-zero LFS will send an {@link IS_VER} packet */
  @byte() ReqI = 0;

  @byte() readonly Zero = 0;

  /** Port for UDP replies from LFS (0 to 65535) */
  @word() UDPPort = 0;

  /** Bit flags for options */
  @word() Flags: InSimFlags = 0;

  /** The INSIM_VERSION used by your program */
  @byte() InSimVer = 0;

  /** Special host message prefix character */
  @char(1) Prefix = '';

  /** Time in ms between {@link IS_NLP} or {@link IS_MCI} (0 = none) */
  @word() Interval = 0;

  /** Admin password (if set in LFS) */
  @char(16) Admin = '';

  /** A short name for your program */
  @char(16) IName = '';

  constructor(data?: IS_ISI_Data) {
    super();
    this.initialize(data);
  }
}

export type IS_ISI_Data = PacketDataWithOptionalReqI<IS_ISI>;

export enum IS_ISI_ReqI {
  ZERO,

  /** Send back an {@link IS_VER} packet */
  SEND_VERSION,
}
