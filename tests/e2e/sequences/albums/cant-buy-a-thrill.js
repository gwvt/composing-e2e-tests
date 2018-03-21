module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-cant-buy-a-thrill')
      .click('#next-page')
      .waitForElementVisible('#album-cant-buy-a-thrill-1', 5000)
      .assert.containsText('.title', 'Can\'t Buy a Thrill')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-cant-buy-a-thrill-2', 5000)
      .assert.containsText('.title', 'Can\'t Buy a Thrill')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-cant-buy-a-thrill-3', 5000)
      .assert.containsText('.title', 'Can\'t Buy a Thrill')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
