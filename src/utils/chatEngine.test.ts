import test from 'node:test';
import assert from 'node:assert/strict';
import { matchChatIntent } from './chatEngine.ts';

test('matches services intent correctly', () => {
  const result = matchChatIntent('what services do you offer?');
  assert.match(result.text, /We build custom AI chatbots/);
});

test('matches location intent correctly', () => {
  const result = matchChatIntent('where do you serve?');
  assert.match(result.text, /businesses worldwide/);
});

test('matches booking intent and shows calendar booking trigger', () => {
  const result = matchChatIntent('How do I book a call?');
  assert.equal(result.showBookingCard, true);
  assert.match(result.text, /strategy call with us directly/);
});

test('matches pricing intent correctly', () => {
  const result = matchChatIntent('how much does this cost?');
  assert.match(result.text, /Custom AI chatbots start from/);
  assert.equal(result.showBookingCard, true);
});

test('falls back gracefully on unknown questions and directs to call', () => {
  const result = matchChatIntent('Can you make me a pizza?');
  assert.match(result.text, /strategy call/);
  assert.ok(result.chips?.includes('Book a Call on Calendar 📅'));
});
