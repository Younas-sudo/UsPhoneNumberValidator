# Phone Number Validator

This project contains a JavaScript function to validate U.S. phone numbers using regular expressions. It ensures that phone numbers follow commonly used formats and are valid for use.

---

## Features

- Validates various U.S. phone number formats.
- Supports numbers with or without the country code (`1`).
- Accepts phone numbers with or without separators (dashes, spaces, or periods).
- Ensures area codes and subscriber numbers are correctly formatted.

---

## Usage

### Function

The main function is:

```javascript
function validatePhoneNumber(phone) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s.]?\d{3}[-\s.]?\d{4}$/;
  return regex.test(phone);
}
