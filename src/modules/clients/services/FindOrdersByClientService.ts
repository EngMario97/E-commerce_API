import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import OrdersByClientRepository from "../infra/typeorm/repositories/OrdersByClientRepository ";

export default class FindOrdersByClientService {
  public async execute(id: number): Promise<Client> {
    const ordersByClientRepository = new OrdersByClientRepository();

    const client = await ordersByClientRepository.findById(id);

    if (!client) {
      throw new AppError("Cliente não existe");
    }

    return client;
  }
}
