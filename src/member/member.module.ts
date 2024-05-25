import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../app/entities/member/member.entity';
import { MemberRepository } from './member.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MemberService, MemberRepository],
  controllers: [MemberController],
})
export class MemberModule {}
