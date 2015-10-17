import RequiredFieldValidator from "../validators/required";
import ValidationManager from "../validation-manager";

export default function Required(message?: string): PropertyDecorator {
    return function (targetClass: Object, property: string) {
        var manager = ValidationManager.get(targetClass);
        manager.addValidator(property, new RequiredFieldValidator(message));
    }
}