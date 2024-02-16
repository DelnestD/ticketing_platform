import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn("uuid")
    public declare id: string;

    @Column({
        length: 32,
    })
    public declare name: string;

    @Column({
        length: 32,
    })
    public declare location: string;

    @Column({
        length: 32,
    })
    public declare date: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
    })
    public declare createdAt: Date;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
    })
    public declare updatedAt: Date;
}
