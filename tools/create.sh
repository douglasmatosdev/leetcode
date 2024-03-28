#!/bin/bash

text=$1
rm -rf "./src/$text"
mkdir "./src/$text"
touch "./src/$text/$text.js"
touch "./src/$text/$text.test.js"

file_to_write_template="./src/$text/$text.test.js"

echo "describe('$text', () => {"             >> $file_to_write_template
echo "    test('should ', () => {"           >> $file_to_write_template
echo " "                                     >> $file_to_write_template
echo "    });"                               >> $file_to_write_template
echo "});"                                   >> $file_to_write_template