#!/bin/sh

#######
# Set variables
#######
version="0.1.0"
storiesPathRelative="./src/stories"
storiesPathAbsolute="$(pwd)/src/stories"

#######
# Set colors
#######
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

#######
# Functions
#######

# Cross-platform sed
sedi() {
  sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

# Function to convert a string to PascalCase
to_pascal_case() {
  input=$1
  echo "$input" | awk '{
    for (i = 1; i <= NF; i++) {
      $i = toupper(substr($i, 1, 1)) tolower(substr($i, 2))
    }
    gsub(/[^a-zA-Z0-9]/, "", $0)
    print
  }'
}

#######
# Get new component name
#######
echo "┌──────"
echo -e "| Add story version: ${GREEN}$version${NC}"
echo "├──────"

echo -n "└ Input component name: "
read componentName

# Ensure component name is PascalCase
componentNamePascal=$(to_pascal_case "$componentName")
echo -e "| Processed component name: ${GREEN}$componentNamePascal${NC}"

#######
# Exit if component already exists
#######
if [ -d "$storiesPathAbsolute/$componentNamePascal" ]; then
  echo -e "[${RED}Error${NC}] Component with that name already exists."
  exit 1
fi

#######
# Create new story folder and files
#######
mkdir -p "$storiesPathAbsolute/$componentNamePascal"

# Create empty files
touch "$storiesPathAbsolute/$componentNamePascal/$componentNamePascal.js"
touch "$storiesPathAbsolute/$componentNamePascal/$componentNamePascal.mdx"

# Create stories.js file with desired content
echo "import { $componentNamePascal } from './$componentNamePascal';" >"$storiesPathAbsolute/$componentNamePascal/$componentNamePascal.stories.js"
echo "import { themes, figmaLinks } from '../../../.storybook/globals';" >>"$storiesPathAbsolute/$componentNamePascal/$componentNamePascal.stories.js"

#######
# Success
#######
echo "┌──────"
echo -e "| DONE"
echo -e "| New story created under ${GREEN}$storiesPathAbsolute/$componentNamePascal${NC}"
echo "└──────"

exit 0

