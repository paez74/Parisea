import { User } from './user';

export class CatalogLine {
    id?: string;
}

export class Catalog extends CatalogLine {
    creationDate: Date;
    updatedDate: Date;
    createdById: string;
    createdBy: User;
    updatedById: string;
    updatedBy: User;

    key: string;
    name: string;
    description: string;
    erased: boolean;
}
