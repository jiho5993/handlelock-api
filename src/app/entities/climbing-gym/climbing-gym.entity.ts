import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ClimbingGymStatus } from './climbing-gym.constant';
import { ClimbingSchedule } from '../climbing-schedule/climbing-schedule.entity';

@Entity()
export class ClimbingGym {
  @PrimaryColumn()
  idx: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 300 })
  location: string;

  @Column('enum', { enum: ClimbingGymStatus, default: ClimbingGymStatus.Open })
  status: ClimbingGymStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => ClimbingSchedule, (climbingSchedule) => climbingSchedule.climbingGym)
  schedules: ClimbingSchedule[];
}
