This repo demonstrates one approach to building a composable end-to-end test suite.

The scenario: several of the studio musicians who played on Steely Dan albums got together to reminisce about the old days. Thinking they would love to have a web app that would help them relive their time with Donald and Walter in the studio, they have approached you, the developer, and offered you an ENOURMOUS amount of money to build them such an app. You jump at the chance because 1) you like making things with code, 2) you like making money, and 3) you think Steely Dan is the best band ever. (Don't you???)

The app requires multiple levels of configuration, with overlapping details, based on which Steely Dan studio musician is logging in. (In this simplified demonstration app, the two levels of configuration are by instrument and set of albums the musician user played on.) Because these configurations result in complex interactions in the app's expected behavior, you realize that to ensure the best possible experience for your users you need to test how the app behaves with different configurations. But how do you write the tests without repeating code to capture the different combinations?

This repo walks through how to compose end-to-end tests that account for these configuration sets, but in such a way that writing the test code is economical and maintaining it over time is efficient.

To walk through the steps of building such a test suite, start at branch 00 and continue to branch 05. Refer to lookat.txt in each branch for a summary of changes.
