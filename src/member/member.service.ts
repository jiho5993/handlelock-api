import { HttpStatus, Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { CreateMemberBodyDto, GetMembersQueryDto } from './member.dto';
import { Member } from '../app/entities/member/member.entity';
import { EntityManager } from 'typeorm';
import { MemberStatus } from '../app/entities/member/member.constant';
import { ClientRequestException } from '../app/exceptions/request.exception';
import ERROR_CODE from '../app/exceptions/error-code';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async createMember(dto: CreateMemberBodyDto, manager?: EntityManager): Promise<Member> {
    const member = this.memberRepository.createInstance({
      name: dto.name,
      gender: dto.gender,
      birth: dto.birth,
      joinDate: dto.joinDate,
    });
    return this.memberRepository.addMember(member, manager);
  }

  async getMembers(query?: GetMembersQueryDto): Promise<[Member[], number]> {
    return this.memberRepository.getMembers(query);
  }

  async updateMemberStatus(memberIdx: number, status: MemberStatus, manager?: EntityManager): Promise<Member> {
    const member = await this.memberRepository.getMember({ idx: memberIdx });
    if (!member) {
      throw new ClientRequestException(ERROR_CODE.ERR_003_0003, HttpStatus.BAD_REQUEST);
    }
    await this.memberRepository.updateMember({ idx: member.idx }, { status }, manager);
    return member;
  }
}
