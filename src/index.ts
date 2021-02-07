import './asset/style/main.scss';

export class Greeter {
  constructor() {}

  greet(name: string) {
    console.log('Hello, ', name);
  }
}

new Greeter().greet('World');
