import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Artist } from './artist.js';
import { Fan } from './fan.js';

@Entity()
export class Event extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('varchar')
	name!: string;

	@Column('timestamptz', { nullable: true })
	date!: Date;

	@Column('varchar')
	location!: string;

	/*
		Relations
	*/
	@ManyToMany(() => Artist, (artist) => artist.events)
	@JoinTable({ name: 'event_artists' })
	artists!: Artist[];

	@ManyToMany(() => Fan, (fan) => fan.events)
	fans!: Fan[];

	/*
		Create/Update Dates
	*/
	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
