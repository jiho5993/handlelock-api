import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiPath } from './member.constant';
import { MemberService } from './member.service';
import { CreateMemberBodyDto, GetMemberParamDto, GetMembersQueryDto, UpdateMemberStatusBodyDto } from './member.dto';
import { ListFilterPipe } from '../app/pipe/common.pipe';
import { GetMemberParamPipe, GetMembersQueryPipe } from './member.pipe';
import { IListCountResponse } from '../app/interfaces/common.interface';
import { MemberResponseDto } from './dtos/member-response.dto';

@Controller(ApiPath.Root)
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createMember(@Body() body: CreateMemberBodyDto): Promise<void> {
    await this.memberService.createMember(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getMembers(@Query(ListFilterPipe, GetMembersQueryPipe) query: GetMembersQueryDto): Promise<IListCountResponse<MemberResponseDto>> {
    const [members, count] = await this.memberService.getMembers(query);
    return { list: members.map((member) => new MemberResponseDto(member)), count };
  }

  @Put(`${ApiPath.GetMember}/${ApiPath.Status}`)
  @HttpCode(HttpStatus.OK)
  async updateMemberStatus(@Param(GetMemberParamPipe) param: GetMemberParamDto, @Body() body: UpdateMemberStatusBodyDto): Promise<void> {
    await this.memberService.updateMemberStatus(param.memberIdx, body.status);
  }
}
