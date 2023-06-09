import 'reflect-metadata';

const CONTROLLER_METADATA_KEY = Symbol('controller:prefix');

export function Controller(prefix?: string): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(CONTROLLER_METADATA_KEY, prefix, target);
    }
}