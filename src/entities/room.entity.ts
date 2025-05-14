import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('rooms')
export class Room {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;

  @Column()
  creatorId!: string;

  @Column({ type: 'array' })
  members!: string[];

  @Column({ default: 'public' })
  type!: 'public' | 'private';

  @Column({ default: () => new Date() })
  createdAt!: Date;
}