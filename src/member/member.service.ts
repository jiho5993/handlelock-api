import { Injectable } from '@nestjs/common';
import { MemberRepository } from './member.repository';
import { CreateMemberBodyDto, GetMembersQueryDto } from './member.dto';
import { Member } from '../app/entities/member/member.entity';
import { EntityManager } from 'typeorm';

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
}
