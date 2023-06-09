import 'reflect-metadata';

const MODULE_METADATA_KEY = Symbol('custom:module');

export interface ModuleOptions {
    imports?: Function[];
    providers?: Function[];
    controllers?: Function[];
}

// Module is a decorator factory
export function Module(options: ModuleOptions = {}): ClassDecorator {
    return (target: Function) => {
        const modulMetadata: ModuleOptions = {
            imports: options.imports || [],
            providers: options.providers || [],
            controllers: options.controllers || [],
        }

        Reflect.defineMetadata(MODULE_METADATA_KEY, modulMetadata, target);
    }
}