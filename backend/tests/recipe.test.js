// import modules
const { test, describe } = require('node:test');
const assert = require('node:assert');
const supertest = require('supertest');
const Recipe = require('../models/recipe');

// loading server
const app = require('../app');

// creating test api
const api = supertest(app);

// creating tests
test('Getting All Recipes', async () => {
  const result = await api.get('/api/recipe');
  const db_data = await Recipe.find({});
  assert.strictEqual(result.body.data.length, db_data.length);
});

test('Getting Specific Recipe', async () => {
  const result = await api.get('/api/recipe/673851ef7aea0de37023c782');
  assert.strictEqual(result.body.data.name, 'Chocolate Chip Cookies');
});