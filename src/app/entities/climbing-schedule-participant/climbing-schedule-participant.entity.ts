import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ClimbingSchedule } from '../climbing-schedule/climbing-schedule.entity';
import { Member } from '../member/member.entity';

@Entity()
export class ClimbingScheduleParticipant {
  @PrimaryColumn()
  climbingScheduleIdx: number;

  @PrimaryColumn()
  memberIdx: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => ClimbingSchedule, (climbingSchedule) => climbingSchedule.participants)
  climbingSchedule: ClimbingSchedule;

  @ManyToOne(() => Member, (member) => member.climbingScheduleParticipants)
  member: Member;
}
