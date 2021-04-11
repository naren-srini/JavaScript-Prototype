/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

// Below the const formatter is passed new values
// i.e., local (language-country), currency and value (which can be sum, tip, total)
const formatter1 = (locale = "en-CA", currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "CAD",
    }).format(value);
    return formattedValue;
}; // Returns CAD

const formatter2 = (locale = "en-US", currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
    }).format(value);
    return formattedValue;
}; //Returns USD

// Here the locale and currency are added to support..
// ..Passing the values to the function tipCalculator(Actual function)
const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;

    // In the below code is added exact values to fetch the object elements
    console.log(`
      Sum before tip: ${formatter1(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter1(locale, currency, tip)}
      Total:          ${formatter1(locale, currency, total)}
    `);

    console.log(`
      Sum before tip: ${formatter2(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter2(locale, currency, tip)}
      Total:          ${formatter2(locale, currency, total)}
    `);
};

// We are passing the four arguments
tipCalculator(10, 12, "en-CA", "CAD");
tipCalculator(10, 18, "en-US", "USD");