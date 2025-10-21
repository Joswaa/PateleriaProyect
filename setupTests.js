// src/setupTests.js
import '@testing-library/jest-dom';

// Polyfill para requestSubmit (soluciona el error del formulario)
if (!HTMLFormElement.prototype.requestSubmit) {
  HTMLFormElement.prototype.requestSubmit = function(submitter) {
    if (submitter) {
      submitter.click();
    } else {
      const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        submitBtn.click();
      } else {
        this.submit();
      }
    }
  };
}

// Mock para matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});