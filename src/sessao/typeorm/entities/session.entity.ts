import { SessionModel } from '@/sessao/models/sessions.model'
import { User } from '@/users/typeorm/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('sessions')
export class Session implements SessionModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (usuario) => usuario.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  usuario: User;

  @Column()
  user_id: string;

  @Column()
  nome: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}