export class Medicine {
  constructor(
    public id: number,
    public name: string,
    public exp_date: string,
    public quantity: number,
    public describtion: string,
    public image: string,
    public price: number
  ) {}
}
