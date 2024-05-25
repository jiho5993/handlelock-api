import { isEnum, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ClientRequestException } from '../app/exceptions/request.exception';
import ERROR_CODE from '../app/exceptions/error-code';
import { HttpStatus } from '@nestjs/common';
import { MemberGender, MemberStatus } from '../app/entities/member/member.constant';

@ValidatorConstraint({ name: 'isMemberName' })
export class IsMemberName implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value === 'string' && value.length > 0 && value.length <= 10) {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_003_0001, HttpStatus.BAD_REQUEST);
  }
}

@ValidatorConstraint({ name: 'isMemberGender' })
export class IsMemberGender implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value === 'string' && Object.values(MemberGender).includes(value as MemberGender)) {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_003_0002, HttpStatus.BAD_REQUEST);
  }
}

@ValidatorConstraint({ name: 'isMemberStatus' })
export class IsMemberStatus implements ValidatorConstraintInterface {
  validate(value: any) {
    if (isEnum(value, MemberStatus)) {
      return true;
    }

    throw new ClientRequestException(ERROR_CODE.ERR_003_0004, HttpStatus.BAD_REQUEST, { value: Object.values(MemberStatus).join(', ') });
  }
}
