module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-pretzel-logic')
      .click('#next-page')
      .waitForElementVisible('#album-pretzel-logic-1', 5000)
      .assert.containsText('.title', 'Pretzel Logic')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-pretzel-logic-2', 5000)
      .assert.containsText('.title', 'Pretzel Logic')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-pretzel-logic-3', 5000)
      .assert.containsText('.title', 'Pretzel Logic')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
