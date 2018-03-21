module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-gaucho')
      .click('#next-page')
      .waitForElementVisible('#album-gaucho-1', 5000)
      .assert.containsText('.title', 'Gaucho')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-gaucho-2', 5000)
      .assert.containsText('.title', 'Gaucho')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
