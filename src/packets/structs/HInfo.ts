import { byte, string } from '../../utils';
import { Struct } from '../base';
import type { HostInfoFlags } from '../enums';

/** Sub packet for {@link IR_HOS}. Contains host information */
export class HInfo extends Struct {
  /** Name of the host */
  @string(32) HName = '';

  /** Short track name */
  @string(6) Track = '';

  /** Info flags about the host */
  @byte() Flags: HostInfoFlags = 0;

  /** Number of people on the host */
  @byte() NumConns = 0;
}