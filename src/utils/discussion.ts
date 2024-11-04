export class Discussion{
  messages!:string;
  identite!:boolean;
  constructor(question: string, b: boolean) {
      this.messages=question;
      this.identite=b;
  }
}
