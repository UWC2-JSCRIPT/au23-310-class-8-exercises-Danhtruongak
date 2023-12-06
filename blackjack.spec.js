describe("dealerShouldDraw", function () {
  it("should return false when the dealer has 10 and 9", function () {
    const dealerHand = [
      { displayVal: "10", val: 10 },
      { displayVal: "9", val: 9 },
      // Add other cards if needed for the dealer's hand
    ];
    const result = dealerShouldDraw(dealerHand);
    expect(result).toBe(false);
  });
});
describe("dealerShouldDraw", function () {
  it("should return true when the dealer has an Ace and 6", function () {
    const dealerHand = [
      { displayVal: "Ace" },
      { displayVal: "6", val: 6 },
      // Add other cards if needed for the dealer's hand
    ];
    const result = dealerShouldDraw(dealerHand);
    expect(result).toBe(true);
  });
});
describe("dealerShouldDraw", function () {
  it("should return false when the dealer has an Ace, 6 and 10", function () {
    const dealerHand = [
      { displayVal: "Ace" },
      { displayVal: "6", val: 6 },
      { displayVal: "10", val: 10 },
      // Add other cards if needed for the dealer's hand
    ];
    const result = dealerShouldDraw(dealerHand);
    expect(result).toBe(false);
  });
});

describe("dealerShouldDraw", function () {
  it("should return true when the dealer has 2,4,2,5", function () {
    const dealerHand = [
      { displayVal: "2", val: 2 },
      { displayVal: "2", val: 2 },
      { displayVal: "4", val: 4 },
      { displayVal: "5", val: 5 },
      // Add other cards if needed for the dealer's hand
    ];
    const result = dealerShouldDraw(dealerHand);
    expect(result).toBe(true);
  });
});
