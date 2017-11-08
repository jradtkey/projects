export class Puppy {

  image: string
  name: string;
  description: string;
  price: number;
  location: string;
  user_id: string;

  constructor(image, name, description, price, location){
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.location = location;
  }

}
