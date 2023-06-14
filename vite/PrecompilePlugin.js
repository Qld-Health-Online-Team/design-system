import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';

// A custom Vite plugin to precompile Handlebars templates
export default function precompilePlugin() {
  return {
    name: 'precompile-plugin',
    generateBundle() {
      // Copy files and directories
      copyFiles('src/assets', 'dist/mysource_files');
      copyFiles('src/externals', 'dist/externals');
      generateHelper('src/helpers/Handlebars', 'dist/js');

	  // Process components
	  processComponents('src/components', 'dist/components');
	  console.log(`Precompile complete`);
    }
  };
}

// Copy files and directories
function copyFiles(srcDir, distDir) {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);

  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyFiles(srcPath, distPath);
    } else {
      fs.copyFileSync(srcPath, distPath);
    }
  });
}

// Generate Handlebar helper JS file
function generateHelper(srcDir, distDir) {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const helperFiles = fs.readdirSync(srcDir);

  const registerFunctions = [];
  let helpersFile = '';

  helperFiles.forEach(file => {
    const filePath = "../" + path.join(srcDir, file);
    const helperName = path.basename(file, path.extname(file));
    const helperFunction = require(filePath);
    Handlebars.registerHelper(helperName, helperFunction);
	let registerFunction = `Handlebars.registerHelper('${helperName}', ${helperFunction.toString()}); \r\n`;
    helpersFile += registerFunction;
  });

  const outputPath = path.join(distDir, 'helpers.js');
  fs.writeFileSync(outputPath, helpersFile);
}

// Process each component
// For each component it runs below:
// copyFiles() to copy the manifest.json
// generateXML() to generate import.xml
// compileTemplate() to compile Handlebars and generate static.html & presentation.js
function processComponents(srcDir, distDir) {
	if (!fs.existsSync(distDir)) {
	  fs.mkdirSync(distDir, { recursive: true });
	}
  
	const componentFolders = fs.readdirSync(srcDir);
  
	// Loop each component folder
	componentFolders.forEach(component => {
	  const srcComponentDir = path.join(srcDir, component);
	  const distComponentDir = path.join(distDir, component);
  
	  fs.mkdirSync(distComponentDir, { recursive: true });
	  
	  if (fs.statSync(srcComponentDir).isDirectory()) {
		const manifestSrcPath = path.join(srcComponentDir, 'js', 'manifest.json');
		const manifestDistPath = path.join(distComponentDir, 'manifest.json');
		if (fs.existsSync(manifestSrcPath)) {
			// Copy manifest.json to distDir
			fs.copyFileSync(manifestSrcPath, manifestDistPath);

			const manifestData = fs.readFileSync(manifestSrcPath, 'utf8');
			if(manifestData.length) {
				const manifestDataXML = JSON.parse(manifestData);
				const importXMLDistPath = path.join(distComponentDir, 'import.xml');
				generateXML(manifestDataXML, importXMLDistPath);

				const templatePath = path.join(srcComponentDir, 'html/component.hbs');
				if (fs.existsSync(templatePath)) {
					const manifestDataParsed = JSON.parse(manifestData).component;
					const staticDistPath = path.join(distComponentDir, 'static.html');
					const precompileDistPath = path.join(distComponentDir, 'presentation.js');
					compileTemplate(templatePath, manifestDataParsed, staticDistPath, precompileDistPath);
				}
			}
		}
	  }
	});
}

// Generate import.xml
function generateXML(manifestDataXML, importXMLDistPath) {

	function rand() {
		return Math.floor(Math.random() * 10000000000);
	}
	
	const capitalise = (words) => {
		var separateWord = words.toLowerCase().split(' ');
		for (var i = 0; i < separateWord.length; i++) {
		   separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
		   separateWord[i].substring(1);
		}
		return separateWord.join(' ');
	}

	var idMap = {
		'cct_id':rand(),
		'schema_id':rand(),
		'section_id':rand()
	};

	if(typeof(manifestDataXML.component.data) !== 'undefined' && typeof(manifestDataXML.component.data.metadata) !== 'undefined'){
		//grab the metadata fields
		for(const field in manifestDataXML.component.data.metadata) {
			idMap[field] = rand();
		}
	}

	var XMLOutput = '';

	//Header
	XMLOutput+=`<?xml version="1.0" encoding="utf-8"?>
	<actions>`

	//CCT
	XMLOutput+= `
	<action>
	  <action_id>create_Content_Container_Template_${idMap.cct_id}</action_id>
	  <action_type>create_asset</action_type>
	  <type_code>Content_Container_Template</type_code>
	  <link_type>1</link_type>
	  <parentid>1</parentid>
	  <value></value>
	  <is_dependant>0</is_dependant>
	  <is_exclusive>0</is_exclusive>
	</action>
	<action>
	  <action_id>set_Content_Container_Template_${idMap.cct_id}_name</action_id>
	  <action_type>set_attribute_value</action_type>
	  <asset>[[output://create_Content_Container_Template_${idMap.cct_id}.assetid]]</asset>
	  <attribute>name</attribute>
	  <value><![CDATA[${capitalise(manifestDataXML.component.name)}]]></value>
	</action>

	<action>
	  <action_id>set_Content_Container_Template_${idMap.cct_id}_edit_interface_in_admin</action_id>
	  <action_type>set_attribute_value</action_type>
	  <asset>[[output://create_Content_Container_Template_${idMap.cct_id}.assetid]]</asset>
	  <attribute>edit_interface_in_admin</attribute>
	  <value><![CDATA[1]]></value>
	</action>

	<action>
	  <action_id>set_Content_Container_Template_${idMap.cct_id}_icon_color</action_id>
	  <action_type>set_attribute_value</action_type>
	  <asset>[[output://create_Content_Container_Template_${idMap.cct_id}.assetid]]</asset>
	  <attribute>icon_color</attribute>
	  <value><![CDATA[blue]]></value>
	</action>
	`
	//Schema
	XMLOutput+= `
	<action>
	<action_id>create_Metadata_Schema_${idMap.schema_id}</action_id>
	<action_type>create_asset</action_type>
	<type_code>Metadata_Schema</type_code>
	<link_type>1</link_type>
	<parentid>[[output://create_Content_Container_Template_${idMap.cct_id}.assetid]]</parentid>
	<value></value>
	<is_dependant>0</is_dependant>
	<is_exclusive>0</is_exclusive>
	</action>
	<action>
	  <action_id>set_Metadata_Schema_${idMap.schema_id}_name</action_id>
	  <action_type>set_attribute_value</action_type>
	  <asset>[[output://create_Metadata_Schema_${idMap.schema_id}.assetid]]</asset>
	  <attribute>name</attribute>
	  <value><![CDATA[${capitalise(manifestDataXML.component.name)}]]></value>
	</action>
	<action>
		<action_id>set_permission_${idMap.schema_id}_read_5</action_id>
		<action_type>set_permission</action_type>
		<asset>[[output://create_Metadata_Schema_${idMap.schema_id}.assetid]]</asset>
		<permission>1</permission>
		<granted>1</granted>
		<userid>[[system://public_user]]</userid>
	</action>
	`
	//Section   
	XMLOutput+= `
	<action>
	  <action_id>create_Metadata_Section_${idMap.section_id}</action_id>
	  <action_type>create_asset</action_type>
	  <type_code>Metadata_Section</type_code>
	  <link_type>2</link_type>
	  <parentid>[[output://create_Metadata_Schema_${idMap.schema_id}.assetid]]</parentid>
	  <value></value>
	  <is_dependant>1</is_dependant>
	  <is_exclusive>0</is_exclusive>
	</action>
	<action>
	  <action_id>add_Metadata_Section_${idMap.section_id}_path</action_id>
	  <action_type>add_web_path</action_type>
	  <asset>[[output://create_Metadata_Section_${idMap.section_id}.assetid]]</asset>
	  <parent_asset>[[output://create_Metadata_Schema_${idMap.schema_id}.assetid]]</parent_asset>
	  <path>settings</path>
	</action>
	<action>
	  <action_id>set_Metadata_Section_${idMap.section_id}_name</action_id>
	  <action_type>set_attribute_value</action_type>
	  <asset>[[output://create_Metadata_Section_${idMap.section_id}.assetid]]</asset>
	  <attribute>name</attribute>
	  <value><![CDATA[Settings]]></value>
	</action>
	<action>
		<action_id>set_permission_${idMap.section_id}_read_5</action_id>
		<action_type>set_permission</action_type>
		<asset>[[output://create_Metadata_Section_${idMap.section_id}.assetid]]</asset>
		<permission>1</permission>
		<granted>1</granted>
		<userid>[[system://public_user]]</userid>
	</action>           
	`
	//Fields          
//for(const field in manifestDataXML['data']) {
if(typeof(manifestDataXML.component.data) !== 'undefined' && typeof(manifestDataXML.component.data.metadata) !== 'undefined'){
	for(const field in manifestDataXML['component']['data']['metadata']) {
		
		var f =  manifestDataXML['component']['data']['metadata'][field];
		//Field
		XMLOutput+= `
		<action>
			<action_id>create_${f.type}_${idMap[field]}</action_id>
			<action_type>create_asset</action_type>
			<type_code>${f.type}</type_code>
			<link_type>2</link_type>
			<parentid>[[output://create_Metadata_Section_${idMap.section_id}.assetid]]</parentid>
			<value></value>
			<is_dependant>1</is_dependant>
			<is_exclusive>0</is_exclusive>
		</action> 
		<action>
			<action_id>set_${f.type}_${idMap[field]}_name</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>name</attribute>
			<value><![CDATA[${field}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_friendly_name</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>friendly_name</attribute>
			<value><![CDATA[${f.friendly_name}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_default</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>default</attribute>
			<value><![CDATA[${f.value}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_description</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>description</attribute>
			<value><![CDATA[${f.description}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_editable</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>editable</attribute>
			<value><![CDATA[${f.editable ? 1:0}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_editable</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>editable</attribute>
			<value><![CDATA[${f.editable ? 1:0}]]></value>
		</action>
		<action>
			<action_id>set_${f.type}_${idMap[field]}_required</action_id>
			<action_type>set_attribute_value</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<attribute>required</attribute>
			<value><![CDATA[${f.required ? 1:0}]]></value>
		</action>
		<action>
			<action_id>set_permission_${idMap[field]}_read_5</action_id>
			<action_type>set_permission</action_type>
			<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
			<permission>1</permission>
			<granted>1</granted>
			<userid>[[system://public_user]]</userid>
		</action>
		`
		//Options if Select
		if(f.type == 'metadata_field_select') {
			var options = '';
			for(var option in f.options) {
				options+= `'${option}' => '${f.options[option]}',`
			}
			XMLOutput+= `
			<action>
				<action_id>set_${f.type}_${idMap[field]}_select_options</action_id>
				<action_type>set_attribute_value</action_type>
				<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
				<attribute>select_options</attribute>
				<value><![CDATA[array (${options});]]></value>
			</action>
			<action>
				<action_id>set_{f.type}_${idMap[field]}_edit_params</action_id>
				<action_type>set_attribute_value</action_type>
				<asset>[[output://create_${f.type}_${idMap[field]}.assetid]]</asset>
				<attribute>edit_params</attribute>
				<value><![CDATA[array (
				'style' => 'list',
				'type' => 'table',
				'height' => '',
				'columns' => '1',
				'empty_text' => '',
				'extras' => '',
				);]]></value>
			</action>  
			`
		}
	  }
	}
	XMLOutput+= `</actions>`;

	fs.writeFileSync(importXMLDistPath, XMLOutput);
}

// Compile Handlebars and generate static.html & presentation.js
function compileTemplate(templatePath, manifestDataParsed, staticDistPath, precompileDistPath) {
	// Site & Current JSON files
	const siteData= fs.readFileSync('src/data/site.json', 'utf8');
	const currentData= fs.readFileSync('src/data/current.json', 'utf8');       
	const siteDataParsed = JSON.parse(siteData);
	const currentDataParsed = JSON.parse(currentData);

	// Template Data
	const templateDataPresentation = fs.readFileSync(templatePath, 'utf8');

	// Compile static HTML version of the template
	const compiledHTML = Handlebars.compile(templateDataPresentation);
	fs.writeFileSync(staticDistPath, compiledHTML({
		'component':manifestDataParsed,
		'site':siteDataParsed,
		'current':currentDataParsed,
		'content':'Lorem Ipsum'
	}));

	// Compile presentation version of the template
	const compiledPresentation = Handlebars.precompile(templateDataPresentation);
	fs.writeFileSync(precompileDistPath, compiledPresentation);
}