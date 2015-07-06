import foo from 'src/application/components/background';
describe('Test jasmine', () => {
  let eee = foo();


  it('should return "Do Something" when calling doSomething', () => {
    expect(eee).toEqual('Do something!');
  });
});
