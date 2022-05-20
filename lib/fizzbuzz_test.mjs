const assert = require("assert");
const { fizzbuzz } = require("./fizzbuzz");

describe("Fizz Buzz 数列とその変換規則を扱う fizzbuzz モジュール", () => {
  describe("fizzbuzz 関数は引数に与えられた整数を文字列に変換する", () => {
    describe("3の倍数のときは数の代わりにFizzに変換する", () => {
      test.each([
        { input: 3, reason: "同値類の中の最小の3の倍数" },
        { input: 99, reason: "上限の境界値のひとつ内側の値" }
      ])(
        "$reason である $inputを渡すと文字列Fizzを返す",
        ({ input, reason }) => {
          assert(fizzbuzz(input) === "Fizz", reason);
        }
      );
    });

    describe("5の倍数のときは数の代わりにBuzzに変換する", () => {
      test.each([
        { input: 5, reason: "同値類の中の最小の5の倍数" },
        { input: 100, reason: "上限の境界値" }
      ])(
        "$reason である $input を渡すと文字列Buzzを返す",
        ({ input, reason }) => {
          assert(fizzbuzz(input) === "Buzz", reason);
        }
      );
    });

    describe("3と5両方の倍数のときは数の代わりにFizzBuzzに変換する", () => {
      test.each([{ input: 15, reason: "同値類の中の最小の3と5の公倍数" }])(
        "$reason である $input を渡すと文字列FizzBuzzを返す",
        ({ input, reason }) => {
          assert(fizzbuzz(input) === "FizzBuzz", reason);
        }
      );
    });

    describe("その他の数のときは数をそのまま文字列に変換する", () => {
      test.each([
        { input: 1, expected: "1", reason: "下限の境界値" },
        { input: 2, expected: "2", reason: "下限の境界値のひとつ内側" }
      ])(
        "$reason である $input を渡すと文字列 $expected を返す",
        ({ input, expected, reason }) => {
          assert(fizzbuzz(input) === expected, reason);
        }
      );
    });

    describe("仕様の範囲外の値であっても同じ規則が適用される", () => {
      test("上限の境界値のひとつ外側の値101を渡すと文字列101を返す", () => {
        assert(fizzbuzz(101) === "101");
      });
      test("下限の境界値のひとつ外側の値0は3の倍数でも5の倍数でもあるので文字列FizzBuzzを返す", () => {
        assert(fizzbuzz(0) === "FizzBuzz");
      });
    });
  });
});
