import { Player, PlayerTypeEnum } from "..";

it("should return the same instance when adding 0 points", () => {
  const player = new Player("P1", PlayerTypeEnum.O);
  expect(player.addScore(0) === player).toBeTruthy();
});

it("should return different instance when adding points", () => {
  const player = new Player("P1", PlayerTypeEnum.O);
  expect(player.addScore(1) === player).toBeFalsy();
});

it("should add 10 points to the player", () => {
  const player = new Player("P1", PlayerTypeEnum.O).addScore(10);
  expect(player.name).toBe("P1");
  expect(player.type).toBe(PlayerTypeEnum.O);
  expect(player.score).toBe(10);
});

it("should clean a player with existing score", () => {
  const player = new Player("P1", PlayerTypeEnum.O, 100).clear();
  expect(player.name).toBe("P1");
  expect(player.type).toBe(PlayerTypeEnum.O);
  expect(player.score).toBe(0);
});
