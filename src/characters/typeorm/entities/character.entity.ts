import { CharacterModel } from '@/characters/models/character.model';
import { Session } from '@/sessions/typeorm/entities/session.entity';
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

@Entity('characters')
export class Character implements CharacterModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Session, (session) => session.characters, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sessao_id' })
  session: Session

  @Column()
  sessao_id: string

  @Column()
  nome: string

  @Column()
  classe: string

  @Column()
  raca: string

  @Column()
  pontos_de_vida: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

  
}