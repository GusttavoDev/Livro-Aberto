export default abstract class DeleteUserTDO {
  abstract execute({ id }: { id: string }): Promise<void>;
}
