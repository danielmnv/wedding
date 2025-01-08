export class Person {
  name!: {
    firstName: string;
    lastName: string;
  };
}

export enum PersonType {
  Bride = 'Bride',
  Groom = 'Groom',
}

class Couple extends Person {
  shortName!: string;
  phoneNumber!: string;
  title!: string;
  parents!: [Person, Person];
}

export class Bride extends Couple {}
export class Groom extends Couple {}
