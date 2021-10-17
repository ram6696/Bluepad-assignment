import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
} from 'sequelize-typescript';

@Table({
    tableName: 'articles',
    timestamps: true,
    underscored: true,
    paranoid: true,
})

export class Article extends Model<Article> {
    @AutoIncrement
    @PrimaryKey
    @AllowNull(false)
    @Column({field: 'id'})
    public id: number;

    @AllowNull(false)
    @Column({field: 'title'})
    public title: string;

    @Column({field: 'body'})
    public body: string;

    @Column({field: 'no_of_likes'})
    public noOfLikes: number;

    @Column({field: 'no_of_views'})
    public noOfViews: number;

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
