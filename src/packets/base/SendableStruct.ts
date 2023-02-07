import { InSimError } from '../../protocols/InSim';
import { pack } from '../../utils';
import type { Receivable, Sendable } from '../types';
import { Struct } from './Struct';

export abstract class SendableStruct
  extends Struct
  implements Receivable, Sendable
{
  pack(propertyFormatOverrides?: Record<string, string>): Buffer {
    const propertyNames = this.getValidPropertyNames();

    const values = propertyNames.map(
      (propertyName) =>
        this[propertyName as unknown as Extract<keyof this, string>],
    );

    const format = `<${this.getFormat(propertyFormatOverrides)}`;

    const packedData = pack(format, values);

    if (!packedData) {
      throw new InSimError('Could not pack values into a packet');
    }

    return packedData;
  }
}
