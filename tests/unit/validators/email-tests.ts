import EmailValidator from '../../../src/validators/email';

describe('Email validator', () => {
    let validator: EmailValidator = null;

    beforeEach(() => validator = new EmailValidator());

    describe('isValid', () => {
        describe('When the field is not a valid email address', () => {
            it('Should return an error', () => {
                // Act
                let valid = validator.isValid('foo@b.');

                // Assert
                expect(valid).toBe(false);
            });
        });

        describe('When field is a valid email', () => {
            it('Should not return an error', () => {
                // Act
                let valid = validator.isValid('bob@gmail.com');

                // Assert
                expect(valid).toBe(true);
            });
        });
    });
});