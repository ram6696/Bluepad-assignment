import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    PrimaryKey,
    Table,
    Unique,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: true,
})

export class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @AllowNull(false)
    @Column({field: 'id'})
    public id: number;

    @AllowNull(false)
    @Column({field: 'name'})
    public name: string;

    @AllowNull(false)
    @Unique(true)
    @Column({field: 'email'})
    public email: string;

    @CreatedAt
    @Column({field: 'created_at'})
    public createdAt: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    public updatedAt: Date;

    @DeletedAt
    @Column({field: 'deleted_at'})
    public deletedAt: Date;
}
