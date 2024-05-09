export default abstract class EditUserTDO {
  abstract execute({
    id,
    data,
  }: {
    id: string;
    data: { name: string; profile_img: string };
  }): Promise<void>;
}
