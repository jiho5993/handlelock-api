import { HttpStatus } from '@nestjs/common';
import { isDateString, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import ERROR_CODE from '../exceptions/error-code';
import { ClientRequestException } from '../exceptions/request.exception';

@ValidatorConstraint({ name: 'isNumber' })
export class IsNumber implements ValidatorConstraintInterface {
  validate(value: any, validationArguments: ValidationArguments): boolean {
    const property = validationArguments.property;
    if (!value) {
      throw new ClientRequestException(ERROR_CODE.ERR_000_0007, HttpStatus.BAD_REQUEST, { value: property });
    }

    if (Number.isInteger(value)) {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_001_0001, HttpStatus.BAD_REQUEST, { value: property });
  }
}

@ValidatorConstraint({ name: 'isString' })
export class IsString implements ValidatorConstraintInterface {
  validate(value: any, validationArguments: ValidationArguments): boolean {
    const property = validationArguments.property;
    if (!value) {
      throw new ClientRequestException(ERROR_CODE.ERR_000_0007, HttpStatus.BAD_REQUEST, { value: property });
    }

    if (typeof value === 'string') {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_001_0002, HttpStatus.BAD_REQUEST, { value: property });
  }
}

const NUMBER_RULE = /^[0-9]*$/;

@ValidatorConstraint({ name: 'isStringNumber' })
export class IsStringNumber implements ValidatorConstraintInterface {
  validate(value: any, validationArguments: ValidationArguments): boolean {
    const property = validationArguments.property;
    if (!value) {
      throw new ClientRequestException(ERROR_CODE.ERR_000_0007, HttpStatus.BAD_REQUEST, { value: property });
    }

    if (typeof value === 'string' && NUMBER_RULE.test(value)) {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_001_0001, HttpStatus.BAD_REQUEST, { value: property });
  }
}

@ValidatorConstraint({ name: 'isDateString' })
export class IsDateString implements ValidatorConstraintInterface {
  validate(value: any, validationArguments: ValidationArguments): boolean {
    const property = validationArguments.property;
    if (!value) {
      throw new ClientRequestException(ERROR_CODE.ERR_000_0007, HttpStatus.BAD_REQUEST, { value: property });
    }

    if (!isDateString(value)) {
      throw new ClientRequestException(ERROR_CODE.ERR_001_0003, HttpStatus.BAD_REQUEST, { value: property });
    }

    return true;
  }
}
