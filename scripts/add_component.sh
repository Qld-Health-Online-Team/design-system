#!/bin/sh

#######
# Set varialbes
#######
version="0.1.0";
componentsPathRelative="../../src/components";
componentsPathAbsolute="./src/components";

#######
# Set colors
#######
RED='\033[0;31m';
LRED='\033[1;31m';
GREEN='\033[0;32m';
LGREEN='\033[1;32m';
NC='\033[0m'; # No Color

#######
# Functions
#######

# Cross env sed in place - https://stackoverflow.com/questions/2320564/i-need-my-sed-i-command-for-in-place-editing-to-work-with-both-gnu-sed-and-bsd
sedi () {
  sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

# Rename [component_name] to real name
rename_component_name() 
{
    path=$1
    componentNameTrimed=$2
    
    echo "┌──────";
    for lvl1 in $path/*
    do

        # File on first level
        if [ -f "$lvl1" ]; then
            echo -e "| Processing: ${GREEN}[components]${LGREEN}${lvl1//$componentsPathRelative/}${NC}";
            sedi "s/\[component_name\]/$componentNameTrimed/g" $lvl1
        fi
        
        # Folder on first level
        if [ -d "$lvl1" ]; then
            for lvl2 in $lvl1/*
            do
                # File on second level
                if [ -f "$lvl2" ];
                then
                    echo -e "| Processing: ${GREEN}[components]${LGREEN}${lvl2//$componentsPathRelative/}${NC}";
                    sedi "s/\[component_name\]/$componentNameTrimed/g" $lvl2
                fi
            done
        fi
    done
    echo "└──────";
}

#######
# Get new component name
#######
echo "┌──────";
echo -e "| Add component version: ${LGREEN}$version${NC}";
echo "├──────";

echo -n "└ Input component name: ";
read componentName;
componentNameFriendly="$(tr '[:lower:]' '[:upper:]' <<< ${componentName:0:1})${componentName:1}"
componentNameTrimed=${componentName//[[:space:]]/_}

#######
# Exit if component already exists
#######
if [ -d "$componentsPathAbsolute/$componentNameTrimed" ]; then
    echo -e "[${RED}Error${NC}] Component with that name already exists."
    exit;
fi

#######
# Create new component from the base template
#######
mkdir "$componentsPathAbsolute/$componentNameTrimed"
cp -R "$componentsPathAbsolute/_template/." "$componentsPathAbsolute/$componentNameTrimed"

#######
# Replace [component_name] in template files with actual component name
#######
rename_component_name $componentsPathAbsolute/$componentNameTrimed $componentNameTrimed

#######
# Create component preview page
#######
mv "$componentsPathAbsolute/$componentNameTrimed/html/component-page.html" "./src/html/component-$componentNameTrimed.html"

#######
# Update current.json to add component page to internal navigation
#######
./node_modules/node-jq/bin/jq ".children[0].children = (.children[0].children += [{\"asset_url\": \"/component-$componentNameTrimed.html\",\"asset_name\": \"$componentNameFriendly\",\"asset_short_name\": \"$componentNameFriendly\", \"children\": []}] | .children[0].children | sort_by(.asset_name))" "./src/data/current.json" > "./src/data/current-tmp.json" && mv "./src/data/current-tmp.json" "./src/data/current.json"

#######
# Success
#######
echo "┌──────";
echo -e "| DONE";
echo -e "| To access new component folder type ${LGREEN}cd '$componentsPathAbsolute/$componentNameTrimed'${NC}";
echo "└──────";

exit;
