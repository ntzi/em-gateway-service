import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Event } from './event.js';
import { Fan } from './fan.js';

@Entity()
export class Artist extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('varchar')
	name!: string;

	/*
		Relations
	*/
	@ManyToMany(() => Event, (event) => event.artists)
	events!: Event[];

	@ManyToMany(() => Fan, (fan) => fan.artists)
	fans!: Fan[];

	/*
		Create/Update Dates
	*/
	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
