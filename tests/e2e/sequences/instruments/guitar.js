module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#instrument-guitar-1', 5000)
      .assert.containsText('.title', 'Guitar')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page');
  },
};
