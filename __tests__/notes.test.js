const fs = require('fs');
const { createNote, validateNote } = require('../lib/notes');
const db = require('../db/db.json');
const { jest } = require('@jest/globals');

jest.mock('fs');