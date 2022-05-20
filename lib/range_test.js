const assert = require("assert").strict;
const Range = require("./range");

let range;

beforeEach(() => {
  range = new Range(3, 8);
});

describe("整数の閉区間モジュール", () => {
  describe("整数閉区間の文字列表記を返せる", () => {
    describe("整数閉区間を作成する", () => {
      test("下端を持つ", () => {
        assert(range.getLowerEndpoint() === 3);
      });
      test("上端を持つ", () => {
        assert(range.getUpperEndpoint() === 8);
      });
    });

    describe("整数閉区間の文字列を返却する", () => {
      test("文字列表記を返せる", () => {
        assert(range.convertToString() === "[3, 8]");
      });
    });
  });

  describe("指定した整数を含むか 判定", () => {
    describe("下端に関する 判定", () => {
      test("下端の境界3を与えるとtrue", () => {
        assert(range.judge(3) === true);
      });
      test("下端の境界の1つ外の2を与えるとfalse", () => {
        assert(range.judge(2) === false);
      });
      test("下端の境界の1つ内側4を与えるとtrue", () => {
        assert(range.judge(4) === true);
      });
    });

    describe("上端に関する 判定", () => {
      test("上端の境界8を与えるとtrue", () => {
        assert(range.judge(8) === true);
      });
      test("上端の境界の1つ外の9を与えるとfalse", () => {
        assert(range.judge(9) === false);
      });
      test("上端の境界の1つ内側7を与えるとtrue", () => {
        assert(range.judge(7) === true);
      });
    });
  });
});
