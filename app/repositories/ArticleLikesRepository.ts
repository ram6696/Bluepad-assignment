import { ERROR_CODES } from "@app/constants/AppConstants";
import RepositoryError from "@app/errors/RepositoryError";
import { ArticleLike } from "@app/models/ArticleLikes";
export class ArticleLikesRepository {

    public create = async (attrs: any) => {
        try {
            return await ArticleLike.create(attrs);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                throw new RepositoryError(error.message, ERROR_CODES.ERR_UNIQUE_CONSTRAINT_VIOLATION);
            }
            throw error;
        }
    }

    public findOne = async (attrs: any, includeDeleted: boolean = false) => {
        return await ArticleLike.findOne({
            where: attrs,
            paranoid: !includeDeleted,
        });
    }

    public softDelete = async (attributes: any) => {
        return await ArticleLike.destroy({ where: attributes});
    }
}