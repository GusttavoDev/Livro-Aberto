export default class Book {
  constructor(
    public authorId: string,
    public author: string,
    public title: string,
    public description: string,
    public image: string,
    public ceratedAt?: Date,
    public id?: string,
  ) {}
}
