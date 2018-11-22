import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe'
fixture`display page`
  .page`http://localhost:3000/`
test('test the stop button', async t => {
    await t
      .click('#reset')
      .expect(Selector('#stop').value).eql('stop')
})
test('test the start button', async t => {
  await t
    .click('#reset')
    .expect(Selector('#start').value).eql('run')
})
test('start the game', async t => {
  await t
    .click('#reset')
    .expect(Selector('.blue').count).gte(5, 'contains more than five blue svg elements')
    .expect(Selector('.red').count).gte(5, 'contains more than five red svg elements')
})
test('count the svg elements', async t => {
  await t
    .click('#reset')
    .expect(Selector('svg').count).eql(1600)
})
