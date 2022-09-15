import {FlyBehavior} from './FlyBehavior';
import {SoundBehavior} from './SoundBehavior';

export abstract class Duck {
  flyBehavior: FlyBehavior;
  soundBehavior: SoundBehavior;

  constructor() {}

  abstract display(): void;

  // Delegate to behavior
  doFly(): void {
    this.flyBehavior.fly();
  }
  doSound(): void {
    this.soundBehavior.sound();
  }

  swim(): void {
    console.log("All ducks float, even decoys!");
  }
}