import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ClimbingGym } from '../climbing-gym/climbing-gym.entity';
import { ClimbingScheduleParticipant } from '../climbing-schedule-participant/climbing-schedule-participant.entity';

@Entity()
export class ClimbingSchedule {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('datetime')
  startDate: Date;

  @Column('datetime')
  endDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @ManyToOne(() => ClimbingGym, (climbingGym) => climbingGym.schedules)
  climbingGym: ClimbingGym;

  @OneToMany(() => ClimbingScheduleParticipant, (climbingScheduleParticipant) => climbingScheduleParticipant.climbingSchedule)
  participants: ClimbingScheduleParticipant[];
}
