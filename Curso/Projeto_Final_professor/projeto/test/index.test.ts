import { somar } from "@/index";

test("Deve somar dois números", () => {
  expect(somar(1, 2)).toBe(3);
});

function expect(arg0: number) {
  throw new Error("Function not implemented.");
}
