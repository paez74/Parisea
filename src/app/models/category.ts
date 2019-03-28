import { User } from './user';
import { Catalog } from './catalog';

export class Category extends Catalog {
    parentId: string;
    parentCategory: Category;
    color: string;
}
