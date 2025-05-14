import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('friends')
export class Friend {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  userId!: string;

  @Column()
  friendId!: string;

  @Column({ default: 'pending' })
  status!: 'pending' | 'accepted' | 'rejected';

  @Column({ default: () => new Date() })
  createdAt!: Date;
}