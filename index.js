var Parser = require("jison").Parser;

Parser



// generate source, ready to be written to disk
var parserSource = parser.generate();

// you can also use the parser directly from memory

parser.parse("adfe34bc e82a");
// returns true

parser.parse("adfe34bc zxg");
// throws lexical error