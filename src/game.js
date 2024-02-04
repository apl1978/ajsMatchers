export default function sortHeroesList(heroesList) {

  return heroesList.sort((a, b) => a.health < b.health ? 1 : -1);
}
