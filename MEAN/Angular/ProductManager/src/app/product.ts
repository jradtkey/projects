export class Product {
  constructor(
    public id: number = null,
    public name: string = "",
    public price: number = null,
    public image: string = "",
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
