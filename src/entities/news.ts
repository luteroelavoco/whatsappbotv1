export class News {
  public source: string;
  public linkList: Array<any>

  constructor(props) {
    Object.assign(this, props);
  }
}
