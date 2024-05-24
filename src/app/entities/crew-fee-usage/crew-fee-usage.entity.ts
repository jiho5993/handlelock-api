import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CrewFeeUsageMember } from '../crew-fee-usage-member/crew-fee-usage-member.entity';

@Entity()
export class CrewFeeUsage {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('datetime')
  usageDate: Date;

  @Column('int')
  price: number;

  @Column('text')
  memo: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => CrewFeeUsageMember, (crewFeeUsageMember) => crewFeeUsageMember.crewFeeUsage)
  members: CrewFeeUsageMember[];
}
