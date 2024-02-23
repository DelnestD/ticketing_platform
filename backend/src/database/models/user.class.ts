import { Role } from "../enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    public declare id: string;

    @Column()
    public declare name: string;

    @Column({
        length: 32,
    })
    public declare firstName: string;

    @Column()
    public declare email: string;

    @Column()
    public declare phone: string;

    @Column({
        length: 60,
    })
    public declare password: string;

    @Column()
    public declare street: string;

    @Column({
        length: 12,
    })
    public declare postalCode: string;

    @Column()
    public declare city: string;

    @Column()
    public declare country: string;

    @Column({
        type: "date",
    })
    public declare birthDate: Date;

    @Column({
        type: "enum",
        enum: Object.values(Role),
    })
    public declare role: Role;

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
