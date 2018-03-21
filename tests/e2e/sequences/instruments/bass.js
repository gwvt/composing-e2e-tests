module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#instrument-bass-1', 5000)
      .assert.containsText('.title', 'Bass')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page');
  },
};
