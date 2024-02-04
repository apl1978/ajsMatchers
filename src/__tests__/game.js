import sortHeroesList from '../game.js';

test('test health status', () => {
  const hero = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
  const expected = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
  const received = sortHeroesList(hero);

  expect(received).toEqual(expected);
});

