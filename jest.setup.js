import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// Mock para requestSubmit - jsdom no tiene implementación nativa
Object.defineProperty(HTMLFormElement.prototype, 'requestSubmit', {
  configurable: true,
  writable: true,
  value: () => {},
});
