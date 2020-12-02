describe("Mocha walkthrough", () => {
  describe('sayHey()', () => {
    it('returns the string "Hey!"', () => {
      expect(sayHey()).toEqual("Hey!");
    });
  });

  describe('sayHeyFriend(name)', () => {
    it("return the string 'Hey, ${name}!'", () => {
      sayHeyFriend("Avi");
      expect(sayHeyFriend("Kristin")).toBe("Hey, Kristin!");
    });
  });
});
