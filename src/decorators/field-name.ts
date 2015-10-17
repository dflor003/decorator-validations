import ValidationManager from "../validation-manager";

export default function FieldName(name: string): PropertyDecorator {
    return function (targetClass: Object, property: string) {
        var manager = ValidationManager.get(targetClass);
        manager.setFieldName(property, name);
    }
}