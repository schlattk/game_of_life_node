import { Selector } from 'testcafe'
import { ClientFunction } from 'testcafe'
fixture`Landing Page`
  .page`http://localhost:3000/`
const getPageUrl = ClientFunction(() => window.location.href)
test('test the landing page', async t => {
  await t
    .expect(Selector('#stop').value).eql('stop')
})
test('test the landing page', async t => {
  await t
    .expect(Selector('#reset').value).eql('startreset')
})
test('test the landing page', async t => {
  await t
    .expect(Selector('#start').value).eql('run')
})
test('Check that index redirects to display page', async t => {
  await t
    .click('#reset')
    .expect(getPageUrl()).eql('http://localhost:3000/game_of_life/?move=startreset')
})
