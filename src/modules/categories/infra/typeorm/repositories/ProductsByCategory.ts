import IProductsByCategory from "modules/categories/repositories/IProductsByCategory";
import { getRepository, Repository } from "typeorm";
import Category from "../entities/Category";

export default class ProductsByCategory implements IProductsByCategory {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }


  async findById(id: number): Promise<Category | undefined> {
    // Primeira forma - traz todos os produtos de uma categoria
    // return this.ormRepository.findOne(id, {
    //   relations: ["produtos"],
    // });

    // Segunda Forma - Traz todos os produtos de uma categoria
    return (
      this.ormRepository
        .createQueryBuilder("c")
        // .select(["c.id", "c.descricao", "prod.nome"])
        .leftJoinAndSelect("c.produtos", "prod")
        .where("c.id = :id", { id })
        .getOne()
    );
  }
}
