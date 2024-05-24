import { Exclude, Expose } from 'class-transformer';
import { MemberGender, MemberStatus } from '../../app/entities/member/member.constant';
import { Member } from '../../app/entities/member/member.entity';

export class MemberResponseDto {
  @Exclude() private readonly _idx: number;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _gender: MemberGender;
  @Exclude() private readonly _status: MemberStatus;
  @Exclude() private readonly _birth: Date;
  @Exclude() private readonly _joinDate: Date;
  @Exclude() private readonly _createdDate: Date;
  @Exclude() private readonly _modifiedDate: Date;

  constructor(member: Member) {
    this._idx = member.idx;
    this._name = member.name;
    this._gender = member.gender;
    this._status = member.status;
    this._birth = member.birth;
    this._joinDate = member.joinDate;
    this._createdDate = member.createdDate;
    this._modifiedDate = member.modifiedDate;
  }

  @Expose()
  get idx(): number {
    return this._idx;
  }

  @Expose()
  get name(): string {
    return this._name;
  }

  @Expose()
  get gender(): MemberGender {
    return this._gender;
  }

  @Expose()
  get status(): MemberStatus {
    return this._status;
  }

  @Expose()
  get birth(): Date {
    return this._birth;
  }

  @Expose()
  get joinDate(): Date {
    return this._joinDate;
  }

  @Expose()
  get createdDate(): Date {
    return this._createdDate;
  }

  @Expose()
  get modifiedDate(): Date {
    return this._modifiedDate;
  }
}
