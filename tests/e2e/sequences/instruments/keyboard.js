module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#instrument-keyboard-1', 5000)
      .assert.containsText('.title', 'Keyboard')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page');
  },
};
