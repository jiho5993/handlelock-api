import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '../app/entities/member/member.entity';
import { DeepPartial, EntityManager, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { GetMembersQueryDto } from './member.dto';
import { isArray } from 'class-validator';

@Injectable()
export class MemberRepository {
  constructor(@InjectRepository(Member) private readonly repository: Repository<Member>) {}

  createInstance(member: DeepPartial<Member>): Member {
    return this.repository.create(member);
  }

  async getMember(where: FindOptionsWhere<Member>, relations?: string[]): Promise<Member | undefined> {
    const options: any = { where };
    if (isArray(relations)) {
      options.relations = relations;
    }
    const result = await this.repository.findOne(options);
    if (result) {
      return result;
    }
    return undefined;
  }

  async updateMember(where: FindOptionsWhere<Member>, set: DeepPartial<Member>, manager?: EntityManager): Promise<UpdateResult> {
    if (manager) {
      return manager.update(Member, where, set);
    }
    return this.repository.update(where, set);
  }

  async addMember(member: Member, manager?: EntityManager): Promise<Member> {
    if (manager) {
      return manager.save(Member, member);
    }
    return this.repository.save(member);
  }

  async getMembers(query: GetMembersQueryDto = {}): Promise<[Member[], number]> {
    const queryBuilder = this.repository.createQueryBuilder('member');

    if (query?.limit) {
      queryBuilder.limit(query.limit);
    }
    if (query?.offset) {
      queryBuilder.offset(query.offset);
    }

    if (query?.searchTerm) {
      queryBuilder.where('member.name LIKE :searchTerm', { searchTerm: `%${query.searchTerm}%` });
    }

    if (query?.joinStartDate && query?.joinEndDate) {
      queryBuilder.andWhere('member.joinDate BETWEEN :joinStartDate AND :joinEndDate', {
        joinStartDate: query.joinStartDate,
        joinEndDate: query.joinEndDate,
      });
    } else if (query?.joinStartDate) {
      queryBuilder.andWhere('member.joinDate >= :joinStartDate', { joinStartDate: query.joinStartDate });
    } else if (query?.joinEndDate) {
      queryBuilder.andWhere('member.joinDate <= :joinEndDate', { joinEndDate: query.joinEndDate });
    }

    if (query?.birthStartDate && query?.birthEndDate) {
      queryBuilder.andWhere('member.birth BETWEEN :birthStartDate AND :birthEndDate', {
        birthStartDate: query.birthStartDate,
        birthEndDate: query.birthEndDate,
      });
    } else if (query?.birthStartDate) {
      queryBuilder.andWhere('member.birth >= :birthStartDate', { birthStartDate: query.birthStartDate });
    } else if (query?.birthEndDate) {
      queryBuilder.andWhere('member.birth <= :birthEndDate', { birthEndDate: query.birthEndDate });
    }

    return queryBuilder.getManyAndCount();
  }
}
