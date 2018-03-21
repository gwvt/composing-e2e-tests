module.exports = {
  pages: (browser) => {
    browser
      .waitForElementVisible('#select-album', 5000)
      .click('#select-countdown-to-ecstasy')
      .click('#next-page')
      .waitForElementVisible('#album-countdown-to-ecstasy-1', 5000)
      .assert.containsText('.title', 'Countdown to Ecstasy')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-countdown-to-ecstasy-2', 5000)
      .assert.containsText('.title', 'Countdown to Ecstasy')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#album-countdown-to-ecstasy-3', 5000)
      .assert.containsText('.title', 'Countdown to Ecstasy')
      .waitForElementVisible('#next-page', 5000)
      .click('#next-page')
      .waitForElementVisible('#select-album', 5000);
  },
};
