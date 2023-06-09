import 'reflect-metadata';

const INJECTABLE_METADATA_KEY = Symbol('custom:injectable');

export function Injectable(): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    };
}

export function isInjectable(target: Function): boolean {
    return Reflect.getMetadata(INJECTABLE_METADATA_KEY, target) === true;
}