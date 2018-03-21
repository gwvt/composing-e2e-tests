module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-katy-lied')
      .click('#next-page')
      .waitForElementVisible('#album-katy-lied-1', 5000)
      .assert.containsText('.title', 'Katy Lied')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
