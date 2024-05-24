import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CrewFeeStatus } from './crew-fee.constant';
import { CrewFeePayer } from '../crew-fee-payer/crew-fee-payer.entity';

@Entity()
export class CrewFee {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column('int')
  price: number;

  @Column('text', { nullable: true })
  memo: string;

  @Column('enum', { enum: CrewFeeStatus, default: CrewFeeStatus.Collecting })
  status: CrewFeeStatus;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @OneToMany(() => CrewFeePayer, (CrewFeePayer) => CrewFeePayer.CrewFee)
  payers: CrewFeePayer[];
}
