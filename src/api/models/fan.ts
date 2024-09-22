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
import { Event } from './event.js';

@Entity()
export class Fan extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('varchar', { unique: true })
	email!: string;

	@Column('varchar')
	name!: string;

	/*
		Relations
	*/
	@ManyToMany(() => Event, (event) => event.fans)
	@JoinTable({ name: 'fan_events' })
	events!: Event[];

	@ManyToMany(() => Artist, (artist) => artist.fans)
	@JoinTable({ name: 'fan_artists' })
	artists!: Artist[];

	/*
		Create/Update Dates
	*/
	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
