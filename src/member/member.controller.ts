import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiPath } from './member.constant';
import { MemberService } from './member.service';
import { CreateMemberBodyDto, GetMembersQueryDto } from './member.dto';
import { ListFilterPipe } from '../app/pipe/common.pipe';
import { GetMembersQueryPipe } from './member.pipe';
import { IListCountResponse } from '../app/interfaces/common.interface';
import { MemberResponseDto } from './dtos/member-response.dto';

@Controller(ApiPath.Root)
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createMember(@Body() body: CreateMemberBodyDto) {
    await this.memberService.createMember(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMembers(@Query(ListFilterPipe, GetMembersQueryPipe) query: GetMembersQueryDto): Promise<IListCountResponse<MemberResponseDto>> {
    const [members, count] = await this.memberService.getMembers(query);
    return { list: members.map((member) => new MemberResponseDto(member)), count };
  }
}
