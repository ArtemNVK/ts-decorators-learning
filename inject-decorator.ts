const DESIGN_PARAM_TYPES = Symbol('design:paramtypes');

export function Inject(token: any): ParameterDecorator {
    return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
        const designParamTypes = Reflect.getMetadata(DESIGN_PARAM_TYPES, target, propertyKey);
        designParamTypes[parameterIndex] = token;
        Reflect.defineMetadata(DESIGN_PARAM_TYPES, designParamTypes, target, propertyKey)
    }
}