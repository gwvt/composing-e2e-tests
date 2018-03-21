module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-the-royal-scam')
      .click('#next-page')
      .waitForElementVisible('#album-the-royal-scam-1', 5000)
      .assert.containsText('.title', 'The Royal Scam')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-the-royal-scam-2', 5000)
      .assert.containsText('.title', 'The Royal Scam')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
