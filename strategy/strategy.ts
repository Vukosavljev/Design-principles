interface WeaponBehavior {
  useWeapon(): void;
}

class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Swing a sword");
  }
}
class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Cut with knife");
  }
}
class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log("Chooping with an axe");
  }
}

abstract class AbstractCharacterStrategy {
  strategy: WeaponBehavior;

  constructor(strategy: WeaponBehavior) {
    this.strategy = strategy;
  }

  public fight() {
    return this.strategy.useWeapon();
  }

  public setStrategy(strategy) {
    this.strategy = strategy;
  }
}

class Knight extends AbstractCharacterStrategy {}
class Queen extends AbstractCharacterStrategy {}
class Troll extends AbstractCharacterStrategy {}

const knight = new Knight(new SwordBehavior());
knight.fight();
knight.setStrategy(new AxeBehavior());
knight.fight();

const troll = new Troll(new AxeBehavior());
troll.fight();

const queen = new Queen(new KnifeBehavior());
queen.fight();
