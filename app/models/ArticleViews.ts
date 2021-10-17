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
    tableName: 'article_views',
    timestamps: true,
    underscored: true,
    paranoid: true,
    indexes: [
        {
            fields: ['article_id', 'user_id'],
            unique: true,
        },
    ],
})

export class ArticleView extends Model<ArticleView> {
    @AutoIncrement
    @PrimaryKey
    @AllowNull(false)
    @Column({field: 'id'})
    public id: number;

    @AllowNull(false)
    @Unique(true)
    @Column({field: 'user_id'})
    public userId: number;

    @AllowNull(false)
    @Unique(true)
    @Column({field: 'article_id'})
    public articleId: number;

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
