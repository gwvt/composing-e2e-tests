module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#instrument-saxophone-1', 5000)
      .assert.containsText('.title', 'Saxophone')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page');
  },
};
