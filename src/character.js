export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Wrong length name');
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Type not allowed');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
