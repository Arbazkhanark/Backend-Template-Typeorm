import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('users')
export class User {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ default: () => new Date() })
  createdAt!: Date;
}