import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('chats')
export class Chat {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  senderId!: string;

  @Column()
  receiverId!: string;

  @Column()
  message!: string;

  @Column({ default: () => new Date() })
  createdAt!: Date;
}