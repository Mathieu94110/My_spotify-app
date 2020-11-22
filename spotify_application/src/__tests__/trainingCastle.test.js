import TrainingCastle from "../trainingCastle";
import Disciple from "../disciple";

test("Test la classe TrainingCastle", () => {
  const castle = new TrainingCastle();
  const name = "Valérian";
  let disciple = new Disciple(name);
  castle.acceptNewDisciple(disciple);

  expect(castle.disciples).toContainEqual(disciple);
});
//  expect.arrayContaining([expect.objectContaining(argument)]);
