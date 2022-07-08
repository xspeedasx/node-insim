import 'reflect-metadata';

const formatMetadataKey = Symbol('format');

/** 1-byte character */
export function char(count: number) {
  return Reflect.metadata(formatMetadataKey, count === 1 ? 'c' : `${count}s`);
}

/** 1-byte unsigned integer */
export function byte() {
  return Reflect.metadata(formatMetadataKey, 'B');
}

/** 2-byte unsigned integer */
export function word() {
  return Reflect.metadata(formatMetadataKey, 'H');
}

/** 2-byte signed integer */
export function short() {
  return Reflect.metadata(formatMetadataKey, 'h');
}

/** 4-byte unsigned integer */
export function unsigned() {
  return Reflect.metadata(formatMetadataKey, 'L');
}

/** 4-byte signed integer */
export function int() {
  return Reflect.metadata(formatMetadataKey, 'l');
}

/** 4-byte float */
export function float() {
  return Reflect.metadata(formatMetadataKey, 'f');
}

export function getFormat<T>(target: T, propertyKey: keyof T) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey as string);
}