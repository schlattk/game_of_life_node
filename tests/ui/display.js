import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `My Fixture`
    .page `http://localhost:3000`;

test('start the game', async t => {
  await t
      .click('#reset')
      .expect(Selector('.blue').count).gte(5,'contains more than five blue svg elements')
      .expect(Selector('.red').count).gte(5,'contains more than five red svg elements');
});

test('count the svg elements', async t => {
    await t
      .click('#reset')
      .expect(Selector('svg').count).eql(1600);
});
