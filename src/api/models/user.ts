import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('varchar', { unique: true })
	email!: string;

	@Column('varchar', { unique: true })
	password!: string;

	/*
		Create/Update Dates
	*/
	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
