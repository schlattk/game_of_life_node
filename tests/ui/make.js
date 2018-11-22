import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe'
fixture`display page`
  .page`http://localhost:3000/game_of_life/make`
test('test the stop button', async t => {
  await t
    .expect(Selector('#stop').value).eql('stop')
})
test('test the start button', async t => {
  await t
    .expect(Selector('#start').value).eql('run')
})
test('start the game with a blank grid', async t => {
  await t
    .expect(Selector('.blue').count).eql(1600)
})
// test('user can change the grid', async t => {
//   await t
//     .click('.blue')
//     const rect = Selector('svg').find.child(el => el.className.baseVal === 'red');
//     .expect(rect.count).eql(1);
// })
