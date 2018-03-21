module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-aja')
      .click('#next-page')
      .waitForElementVisible('#album-aja-1', 5000)
      .assert.containsText('.title', 'Aja')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-aja-2', 5000)
      .assert.containsText('.title', 'Aja')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-aja-3', 5000)
      .assert.containsText('.title', 'Aja')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
