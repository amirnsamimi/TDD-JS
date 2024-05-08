//ES6

const assert = require("assert");
const { Rooster, caseToggle, Calculate } = require("../index");

//testing negativity on mocha for js
describe("-", () => {
  it("returns negative of its args", () => {
    assert.ok(4 - 3 === 1);
  });
});

//testing pop
describe(".pop", () => {
  let mockData;
  beforeEach(() => {
    mockData = ["Tehran", "esfahan", "shiraz", "ardabil", "tabriz", "mashahad"];
  });

  it("removes the last index of an array", () => {
    //mock data defining (setup)
    const lastIndex = mockData[mockData.length - 1];

    //excerise
    const functionality = mockData.pop();

    //verifying
    assert.ok(functionality === lastIndex);

    //teardown
    mockData = ["Tehran", "esfahan", "shiraz", "ardabil", "tabriz", "mashahad"];
  });
  it("removes two last items", () => {
    //Setup
    let mockData = [
      "Tehran",
      "esfahan",
      "shiraz",
      "ardabil",
      "tabriz",
      "mashahad",
    ];
    const lastIndex = mockData[mockData.length - 2];

    //exercise || execution
    const popedLast2 = mockData.pop();
    const popedLast21 = mockData.pop();

    //verify
    assert.ok(popedLast21 === lastIndex);

    //teardown
    mockData = ["Tehran", "esfahan", "shiraz", "ardabil", "tabriz", "mashahad"];
  });
});

//testing assert it self
describe("assert", () => {
  it("testing assert methods", () => {
    //setup exercise verify
    assert.ok(true);
  });
});

//testing rooster

describe("Rooster", () => {
  describe("announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "cock-a-doodle-doo!";

      //execution
      const result = Rooster.announceDawn();

      //verify
      assert.strictEqual(result, expected);

      //teardown
    });
  });
  describe("timeAtDawn", () => {
    let hour;
    before(() => {
      hour = Math.floor(Math.random() * 23);
    });

    it("returns its argument as a string", () => {
      //setup
      const max = 23;
      const min = 0;

      //execution
      const result = Rooster.timeAtDawn(hour);
      console.log(result);

      //verify
      assert.ok(result < max);
      assert.ok(result > min);

      //teardown
    });
  });
});

//upper lower toggler
describe("caseToggle", () => {
  it("check if we put in a lower and get an upper", () => {
    //setup
    const input = "hello";
    const pattern = /[A-Z]/;
    //execution
    const result = pattern.test(caseToggle(input));
    //verify
    assert.ok(result);
  });
  it("check if we put in a upper and get an lower", () => {
    //setup
    const input = "HELLO";
    const pattern = /[a-z]/;
    //execution
    const result = pattern.test(caseToggle(input));
    //verify
    assert.ok(result);
  });
  it("check if there is a mixed case and make it low", () => {
    //setup
    const input = "HelLo";
    const pattern = /[a-z]/;
    //execution
    const result = pattern.test(caseToggle(input));
    //verify
    assert.ok(result);
  });
});


//factorial test
describe('Calculate', () => {
  describe('.factorial', () => {
    it('0!',()=>{
      //setup
      const input = 0
      const expected = 1
      //expectation
      const result = Calculate.factorial(input);
      //verify
      assert.strictEqual(result,expected)
    });
    it('!0',()=>{
            //setup
      const input = 10
      const expected = 3628800
      //expectation
      const result = Calculate.factorial(input);
      //verify
      assert.strictEqual(result,expected)
    })
  });
});