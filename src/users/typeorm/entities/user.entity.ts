import { UserModel } from '@/users/models/users.model'
import { Session } from '@/sessao/typeorm/entities/session.entity' 
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User implements UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  password: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

  @OneToMany(() => Session, (sessao) => sessao.mestre, { cascade: true })
  sessions: Session[];
}