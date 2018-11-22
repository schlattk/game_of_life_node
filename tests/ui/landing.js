import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe'
fixture`Landing Page`
  .page`http://localhost:3000/`
const getPageUrl = ClientFunction(() => window.location.href)
test('test the start/reset button', async t => {
  await t
    .expect(Selector('#reset').value).eql('startreset')
})
test('test the make button', async t => {
  await t
    .expect(Selector('#make').value).eql('make')
})
test('Check that index redirects to game_of_life page after pressing start/reset', async t => {
  await t
    .click('#reset')
    .expect(getPageUrl()).eql('http://localhost:3000/game_of_life/?move=startreset')
})
test('Check that index redirects to game/of/life make', async t => {
  await t
    .click('#make')
    .expect(getPageUrl()).eql('http://localhost:3000/game_of_life/make/?move=make')
})
