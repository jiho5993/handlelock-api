import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MemberGender, MemberStatus } from './member.constant';
import { ClimbingScheduleParticipant } from '../climbing-schedule-participant/climbing-schedule-participant.entity';
import { CrewFeePayer } from '../crew-fee-payer/crew-fee-payer.entity';
import { CrewFeeUsageMember } from '../crew-fee-usage-member/crew-fee-usage-member.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('varchar', { length: 10 })
  name: string;

  @Column('enum', { enum: MemberGender })
  gender: MemberGender;

  @Column('enum', { enum: MemberStatus, default: MemberStatus.Activated })
  status: MemberStatus;

  @Column('date')
  birth: Date;

  @Column('datetime')
  joinDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => ClimbingScheduleParticipant, (climbingScheduleParticipant) => climbingScheduleParticipant.member)
  climbingScheduleParticipants: ClimbingScheduleParticipant[];

  @OneToMany(() => CrewFeePayer, (CrewFeePayer) => CrewFeePayer.payer)
  crewFeePayers: CrewFeePayer[];

  @OneToMany(() => CrewFeeUsageMember, (crewFeeUsageMember) => crewFeeUsageMember.member)
  crewFeeUsageMembers: CrewFeeUsageMember[];
}
