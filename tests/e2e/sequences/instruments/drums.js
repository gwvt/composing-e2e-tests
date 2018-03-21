module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#instrument-drums-1', 5000)
      .assert.containsText('.title', 'Drums')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page');
  },
};
