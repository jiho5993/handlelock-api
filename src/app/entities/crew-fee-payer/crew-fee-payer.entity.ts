import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { CrewFee } from '../crew-fee/crew-fee.entity';
import { Member } from '../member/member.entity';

@Entity()
export class CrewFeePayer {
  @PrimaryColumn()
  crewFeeIdx: number;

  @PrimaryColumn()
  payerIdx: number;

  @ManyToOne(() => CrewFee, (CrewFee) => CrewFee.payers)
  CrewFee: CrewFee;

  @ManyToOne(() => Member, (member) => member.crewFeePayers)
  payer: Member;

  @Column('text', { nullable: true })
  memo: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;
}
