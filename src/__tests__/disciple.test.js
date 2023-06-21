import Disciple from "../disciple";

test("Test la classe disciple", () => {
  // on va instancier la classe disciple
  // cad on créé un nouveau disciple
  const name = "Valérian";
  let disciple = new Disciple(name);

  expect(disciple.name).toBe(name); // le dsiciple qui a été instancié a pour nom le nom qu'on lui a filé
  expect(disciple.mushroomsAte).toBe(0); // on test si les champignons sont initialisés à 0 au début
  expect(disciple.trainingSessions).toBe(0);
  expect(disciple.isStillAlive).toBeTruthy();
  expect(disciple.eatMushrooms).toBeDefined();

  // on va appeler la fonction eatMushrooms et vérifier si le nombre de mushroom a été incrémenté
  let prevMushroomsAte = disciple.mushroomsAte;

  disciple.eatMushrooms();

  expect(disciple.mushroomsAte).toBe(++prevMushroomsAte);

  disciple.eatMushrooms();
  disciple.eatMushrooms();
  disciple.eatMushrooms();

  expect(disciple.isStillAlive).toBeFalsy();

  let testTrainingSessions = disciple.trainingSessions + 1;
  disciple.train();
  expect(disciple.trainingSessions).toBe(testTrainingSessions);
  expect(disciple.isTrained()).toBeTruthy();
});
