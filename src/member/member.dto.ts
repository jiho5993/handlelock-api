import { Validate } from 'class-validator';
import { IsMemberGender, IsMemberName, IsMemberStatus } from './member.validation';
import { MemberGender, MemberStatus } from '../app/entities/member/member.constant';
import { IsDateString, IsStringNumber } from '../app/validations/common.validation';
import { ListFilterQueryDto } from '../app/dto/common.dto';

export class CreateMemberBodyDto {
  @Validate(IsMemberName)
  name: string;

  @Validate(IsMemberGender)
  gender: MemberGender;

  @Validate(IsDateString)
  birth: string;

  @Validate(IsDateString)
  joinDate: string;
}

export class GetMembersQueryDto extends ListFilterQueryDto {
  joinStartDate?: string;
  joinEndDate?: string;

  birthStartDate?: string;
  birthEndDate?: string;
}

export class GetMemberParamDto {
  @Validate(IsStringNumber)
  memberIdx: number;
}

export class UpdateMemberStatusBodyDto {
  @Validate(IsMemberStatus)
  status: MemberStatus;
}
