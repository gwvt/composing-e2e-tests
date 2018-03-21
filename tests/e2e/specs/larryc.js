module.exports = {
  'Larry Carlton remembers Gaucho': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#select-musician', 5000)
      .click('#select-larryc')
      .click('#next-page')
      .waitForElementVisible('#instrument-guitar-1', 5000)
      .assert.containsText('.title', 'Guitar')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
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
      .waitForElementVisible('#select-album', 5000)
      .end();
  },
};
