#!/bin/bash
# https://leetcode.com/problems/array-prototype-last/description/
url=$1

string=$url
delimiter="/"

# Convert string to array
IFS="$delimiter" read -ra ADDR <<< "$string"
# Pegando o tamanho do array
array_length=${#ADDR[@]}

# Calculando o índice do penúltimo elemento
penultimo_index=$((array_length - 2))

# Acessando o penúltimo elemento usando o índice calculado
penultimo_elemento=${ADDR[$penultimo_index]}

# Subistituindo "-" por "_"
problem_name=$(echo "$penultimo_elemento" | sed 's/-/_/g')

rm -rf "./src/$problem_name"
mkdir "./src/$problem_name"

file_js="./src/$problem_name/$problem_name.js"
file_test_js="./src/$problem_name/$problem_name.test.js"

touch "$file_js"
touch "$file_test_js"

echo "// $url"                                 >> "$file_js" 
echo "// $url"                                 >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "describe('$problem_name', () => {"       >> "$file_test_js"
echo "    test('Case 1 ', () => {"             >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "    });"                                 >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "    test('Case 2 ', () => {"             >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "    });"                                 >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "    test('Case 3 ', () => {"             >> "$file_test_js"
echo " "                                       >> "$file_test_js"
echo "    });"                                 >> "$file_test_js"
echo "});"                                     >> "$file_test_js"