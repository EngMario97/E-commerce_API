import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindAllClientsService from "./FindAllClientsService";

/**
 * O service terá toda a regra de negócio. Cada service é responsável por
 * uma única atividade.
 *
 * Por Exemplo: Esse service é o responsável por cadastrar um usuário.
 * Todas as operações/regras/verificações que precisam ser feitas para que
 * o usuário seja cadastrado devem ser feitas aqui
 *
 * Como um service só tem uma função ele deve ter apenas um método público
 */
export default class CreateClientService {
  public async execute(data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();
    const findAllClientsService = new FindAllClientsService();

    let clientList = await findAllClientsService.execute();

    for (let i = 0; i < clientList.length; i++) {

      if (data.cpf === clientList[i].cpf) {
        throw new AppError("CPF já existe");
      }

      if (data.email === clientList[i].email) {
        throw new AppError("Email já existe");
      }

      if (data.telefone === clientList[i].telefone) {
        throw new AppError("Telefone já existe");
      }

    }

    const client = await clientRepository.create(data);

    return client;
  }
}
