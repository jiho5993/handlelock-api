import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { CrewFeeUsage } from '../crew-fee-usage/crew-fee-usage.entity';
import { Member } from '../member/member.entity';

@Entity()
export class CrewFeeUsageMember {
  @PrimaryColumn()
  memberIdx: number;

  @PrimaryColumn()
  crewFeeUsageIdx: number;

  @ManyToOne(() => Member, (member) => member.crewFeeUsageMembers)
  member: Member;

  @ManyToOne(() => CrewFeeUsage, (crewFeeUsage) => crewFeeUsage.members)
  crewFeeUsage: CrewFeeUsage;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;
}
