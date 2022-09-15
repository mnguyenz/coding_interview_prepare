import {Duck} from './Duck'
import {FlyLow} from './FlyBehavior'
import {SoundQuack} from './SoundBehavior'

class NormalDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyLow();
    this.soundBehavior = new SoundQuack();
  }

  display(): void {
    console.log("I'm just a normal duck!");
  }
}

class DuckTest {
  private normalDuck: Duck;
  DuckTest(): void {
    this.normalDuck = new NormalDuck();
    this.normalDuck.doFly();
    this.normalDuck.doSound();
  }
}

const duckTest = new DuckTest;
duckTest.DuckTest();