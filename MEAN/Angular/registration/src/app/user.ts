export class User {
  constructor(
    public id: number = null,
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public street: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: boolean = false,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
