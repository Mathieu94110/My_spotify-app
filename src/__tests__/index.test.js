test("Mon premier test unitaire", () => {
  expect(2 + 2).toBe(4);

  let a = true;
  expect(a).toBeTruthy();

  let b = false;
  expect(b).toBeFalsy();

  let user = { name: "Mathieu", skills: "JS" };
  expect(user).toEqual({ name: "Mathieu", skills: "JS" });
  expect(user).toHaveProperty("name", "Mathieu");

  let students = ["Mathieu", "Andranik", "Thomas", "Anna", "José"];

  expect(students).toContainEqual("Thomas");
  expect(students).toHaveLength(5);

  let k = 0;
  expect(k).toBeDefined();

  let response = "test@gmail.com";
  // on attend à ce que les 3 dernières lettres de resonse soient "all"

  expect(response).toMatch(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  );
});
