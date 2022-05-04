import { pack } from '../utils';
import { BasePacket } from './BasePacket';
import type { ISendable } from './ISendable';

export abstract class BaseSendablePacket
  extends BasePacket
  implements ISendable
{
  pack(propertyFormatOverrides?: Record<string, string>): Buffer {
    const propertyNames = this.getValidPropertyNames();

    const values = propertyNames.map((propertyName) => {
      if (propertyName === 'Size') {
        return (
          (this[propertyName] as unknown as number) / BasePacket.SIZE_MULTIPLIER
        );
      }

      return this[propertyName as unknown as Extract<keyof this, string>];
    });

    return pack(this.getFormat(propertyFormatOverrides), values);
  }
}
