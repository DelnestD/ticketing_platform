import { Role } from "../enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    public declare id: string;

    @Column({
        unique: true,
    })
    public declare username: string;

    @Column({
        length: 32,
    })
    public declare firstName: string;

    @Column({
        length: 32,
    })
    public declare lastName: string;

    @Column({
        length: 60,
    })
    public declare password: string;

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
