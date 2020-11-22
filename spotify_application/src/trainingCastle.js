import Disciple from "./disciple";

class TrainingCastle {
  constructor() {
    this.disciples = [];
  }

  acceptNewDisciple(newDiscipleName) {
    this.disciples = [...this.disciples, new Disciple(newDiscipleName)];
  }

  eatMushrooms() {
    for (let i = 0; i < this.disciples.length; ++i) {
      this.disciples[i].eatMushrooms();
    }

    this.disciples = this.disciples.filter((d) => d.isStillAlive);
  }

  trainDisciples() {
    for (let i = 0; i < this.disciples.length; ++i) {
      this.disciples[i].train();
    }
  }
}

export default TrainingCastle;
