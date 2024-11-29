import { CardModel } from '@/cards/models/cards.model'
import { UserModel } from '@/users/models/users.model'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('cards')
export class Card implements CardModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @Column()
  raca: string

  @Column()
  classe: string
  
  @Column()
  nivel: string

  @Column()
  status: string

  @Column()
  modificador: string

  @Column()
  habilidades: string

  @Column()
  itens: string

  @Column()
  danos: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

}