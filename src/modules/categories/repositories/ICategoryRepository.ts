import { DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";

/**
 * Interface que define quais serão os métodos do repositório de Categorias
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface ICategoryRepository {

    create(data: ICategoryDTO): Promise<Category>;
    list(): Promise<Category[]>;
    findById(id: number): Promise<Category | undefined>;
    update(data: ICategoryDTO): Promise<Category>;
    delete(id: number): Promise<DeleteResult>;

}