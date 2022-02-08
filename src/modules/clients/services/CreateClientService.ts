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

    const cpf = await clientRepository.findCpf(data.cpf);
    const email = await clientRepository.findEmail(data.email);
    const telefone = await clientRepository.findTelefone(data.telefone);

    if (cpf) {
      throw new AppError("CPF já existe");
    }
    if (email) {
      throw new AppError("Email já existe");
    }
    if (telefone) {
      throw new AppError("Telefone já existe");
    }

    const client = await clientRepository.create(data);

    return client;
  }
}
