import { UserModel } from '@/users/models/users.model'
import { Session } from '@/sessions/typeorm/entities/session.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @OneToMany(() => Session , (sessao) => sessao.id, { cascade: true })
  @JoinColumn({ name: 'id' }) // Certifique-se do nome correto
  sessions: Session;
}