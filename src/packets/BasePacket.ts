import { pack, unpack } from '../utils/jspack';
import { IPacket } from './IPacket';
import { PacketType } from './packetTypes';

type Data = Record<string, unknown>;

export abstract class BasePacket implements IPacket {
  abstract _format: string;

  ReqI: number;
  abstract readonly Size: number;
  abstract readonly Type: PacketType;

  protected populateData(data: Partial<Data>) {
    if (!data) {
      return;
    }

    (Object.keys(data) as string[]).forEach((key) => {
      (this as Data)[key] = data[key];
    });
  }

  unpack(buffer: Buffer): this {
    const data = unpack(this._format, buffer);

    let i = 0;
    for (const propertyName in this) {
      if (typeof this[propertyName] === 'function') {
        continue;
      }

      if (propertyName.startsWith('_')) {
        continue;
      }

      this[propertyName] = data[i];
      i++;
    }

    return this;
  }

  pack(): string | Uint8Array {
    const values = [];

    for (const propertyName in this) {
      if (typeof this[propertyName] === 'function') {
        continue;
      }

      if (propertyName.startsWith('_')) {
        continue;
      }

      if (propertyName === 'Size') {
        values.push((this[propertyName] as unknown as number) / 4);
        continue;
      }

      values.push(this[propertyName]);
    }

    return pack(this._format, values);
  }
}
