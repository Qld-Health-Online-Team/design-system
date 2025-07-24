const glob = require("glob");
const path = require("path");
const Handlebars = require("handlebars");
const fs = require("fs");
const { logger } = require("handlebars");
const jsDir = `./dist/js`;

// A JavaScript class.
class PrecompilePlugin {
    constructor(options = {}) {
        this.options = options;
    }

    apply(compiler) {
        const outputPath = this.options.output.endsWith("/")
            ? this.options.output.slice(0, -1)
            : this.options.output;
        const hbsTemplates = glob.sync(this.options.input);
        const hbsHelpers = glob.sync(this.options.helpersInput);

        let hbsHelpersFile = "";

        // For each of the handlebars helpers files
        hbsHelpers.forEach((helperPath) => {
            // Get the name of the helper from the file name
            const helperName = helperPath.split("/")[4].split(".")[0];

            // Import the function from the file, and get the correct reference for the JS file
            let module = require(helperPath.replace("./src", "../src"));

            // register the helper using the helper name and the imported function
            Handlebars.registerHelper(helperName, module);

            let registerFunction = `Handlebars.registerHelper('${helperName}', ${module.toString()}); \r\n`;

            hbsHelpersFile += registerFunction;
        });

        //capitalises the first letter of each work in a given string
        const capitalise = (words) => {
            var separateWord = words.toLowerCase().split(" ");
            for (var i = 0; i < separateWord.length; i++) {
                separateWord[i] =
                    separateWord[i].charAt(0).toUpperCase() +
                    separateWord[i].substring(1);
            }
            return separateWord.join(" ");
        };

        // Write the helpers file to dist
        compiler.hooks.afterEmit.tap("PrecompilePlugin", (compilation) => {
            // Your code to write helpers.js here
            if (!fs.existsSync(jsDir)) {
                fs.mkdirSync(jsDir, { recursive: true });
            }
            fs.writeFileSync("./dist/js/helpers.js", hbsHelpersFile);
            console.log("helpers.js written after emit");
        });
        //   if(!fs.existsSync(jsDir)) {
        //     fs.mkdirSync(jsDir, {recursive: true});
        //   }

        //   fs.writeFileSync('./dist/js/helpers.js', hbsHelpersFile);

        compiler.hooks.done.tap("PrecompilePlugin", (stats) => {
            // For each HBS template compile a Presentation and a static Version of the template;

            const siteData = fs.readFileSync("./src/data/site.json", "utf8");
            const currentData = fs.readFileSync(
                "./src/data/current.json",
                "utf8"
            );
            const siteDataParsed = JSON.parse(siteData);
            const currentDataParsed = JSON.parse(currentData);

            hbsTemplates.forEach((templatePath) => {
                // Read the templates from the file system
                const templateDataPresentation = fs.readFileSync(
                    templatePath,
                    "utf8"
                );

                // Get the template name from the path
                const templateName = templatePath.split("/")[3];

                // Make component directory
                fs.mkdirSync(
                    `${outputPath}/${templateName}`,
                    {
                        recursive: true,
                    },
                    (err) => {
                        if (err) throw err;
                    }
                );

                //get dataPath from manifest option
                const dataPath = this.options.manifest.replace(
                    "**",
                    templateName
                );

                logger.log(templateName);

                const manifestData = fs.readFileSync(dataPath, "utf8");

                //Write Manifest
                fs.writeFileSync(
                    `${outputPath}/${templateName}/manifest.json`,
                    manifestData
                );

                //Action Manifest if it exists
                if (manifestData.length) {
                    //Parse manifest
                    const manifestDataParsed =
                        JSON.parse(manifestData).component;

                    //Compile XML

                    if (manifestData.length) {
                        const manifestDataXML = JSON.parse(manifestData);

                        function rand() {
                            return Math.floor(Math.random() * 10000000000);
                        }
                        var idMap = {
                            cct_id: rand(),
                            schema_id: rand(),
                            section_id: rand(),
                        };

                        //test if we have the data and metadata objects as children
                        if (
                            typeof manifestDataXML.component.data !==
                                "undefined" &&
                            typeof manifestDataXML.component.data.metadata !==
                                "undefined"
                        ) {
                            //grab the metadata fields
                            for (const field in manifestDataXML.component.data
                                .metadata) {
                                idMap[field] = rand();
                            }
                        }

                        var XMLOutput = "";

                        //Header
                        XMLOutput += `<?xml version="1.0" encoding="utf-8"?>
          <actions>`;

                        //CCT

                        XMLOutput += `
          <action>
            <action_id>create_Content_Container_Template_${
                idMap.cct_id
            }</action_id>
            <action_type>create_asset</action_type>
            <type_code>Content_Container_Template</type_code>
            <link_type>1</link_type>
            <parentid>1</parentid>
            <value></value>
            <is_dependant>0</is_dependant>
            <is_exclusive>0</is_exclusive>
          </action>
          <action>
            <action_id>set_Content_Container_Template_${
                idMap.cct_id
            }_name</action_id>
            <action_type>set_attribute_value</action_type>
            <asset>[[output://create_Content_Container_Template_${
                idMap.cct_id
            }.assetid]]</asset>
            <attribute>name</attribute>
            <value><![CDATA[${capitalise(
                manifestDataXML.component.name
            )}]]></value>
          </action>

          <action>
            <action_id>set_Content_Container_Template_${
                idMap.cct_id
            }_edit_interface_in_admin</action_id>
            <action_type>set_attribute_value</action_type>
            <asset>[[output://create_Content_Container_Template_${
                idMap.cct_id
            }.assetid]]</asset>
            <attribute>edit_interface_in_admin</attribute>
            <value><![CDATA[1]]></value>
          </action>

          <action>
            <action_id>set_Content_Container_Template_${
                idMap.cct_id
            }_icon_color</action_id>
            <action_type>set_attribute_value</action_type>
            <asset>[[output://create_Content_Container_Template_${
                idMap.cct_id
            }.assetid]]</asset>
            <attribute>icon_color</attribute>
            <value><![CDATA[blue]]></value>
          </action>
          `;

                        //Schema
                        XMLOutput += `
          <action>
          <action_id>create_Metadata_Schema_${idMap.schema_id}</action_id>
          <action_type>create_asset</action_type>
          <type_code>Metadata_Schema</type_code>
          <link_type>1</link_type>
          <parentid>[[output://create_Content_Container_Template_${
              idMap.cct_id
          }.assetid]]</parentid>
          <value></value>
          <is_dependant>0</is_dependant>
          <is_exclusive>0</is_exclusive>
          </action>
          <action>
            <action_id>set_Metadata_Schema_${idMap.schema_id}_name</action_id>
            <action_type>set_attribute_value</action_type>
            <asset>[[output://create_Metadata_Schema_${
                idMap.schema_id
            }.assetid]]</asset>
            <attribute>name</attribute>
            <value><![CDATA[${capitalise(
                manifestDataXML.component.name
            )}]]></value>
          </action>
          <action>
              <action_id>set_permission_${idMap.schema_id}_read_5</action_id>
              <action_type>set_permission</action_type>
              <asset>[[output://create_Metadata_Schema_${
                  idMap.schema_id
              }.assetid]]</asset>
              <permission>1</permission>
              <granted>1</granted>
              <userid>[[system://public_user]]</userid>
          </action>
          `;
                        //Section
                        XMLOutput += `
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
          `;
                        //Fields
                        //for(const field in manifestDataXML['data']) {
                        if (
                            typeof manifestDataXML.component.data !==
                                "undefined" &&
                            typeof manifestDataXML.component.data.metadata !==
                                "undefined"
                        ) {
                            for (const field in manifestDataXML["component"][
                                "data"
                            ]["metadata"]) {
                                var f =
                                    manifestDataXML["component"]["data"][
                                        "metadata"
                                    ][field];
                                //Field
                                XMLOutput += `
              <action>
                  <action_id>create_${f.type}_${idMap[field]}</action_id>
                  <action_type>create_asset</action_type>
                  <type_code>${f.type}</type_code>
                  <link_type>2</link_type>
                  <parentid>[[output://create_Metadata_Section_${
                      idMap.section_id
                  }.assetid]]</parentid>
                  <value></value>
                  <is_dependant>1</is_dependant>
                  <is_exclusive>0</is_exclusive>
              </action> 
              <action>
                  <action_id>set_${f.type}_${idMap[field]}_name</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>name</attribute>
                  <value><![CDATA[${field}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${
                                    idMap[field]
                                }_friendly_name</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>friendly_name</attribute>
                  <value><![CDATA[${f.friendly_name}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${idMap[field]}_default</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>default</attribute>
                  <value><![CDATA[${f.value}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${
                                    idMap[field]
                                }_description</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>description</attribute>
                  <value><![CDATA[${f.description}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${idMap[field]}_editable</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>editable</attribute>
                  <value><![CDATA[${f.editable ? 1 : 0}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${idMap[field]}_editable</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>editable</attribute>
                  <value><![CDATA[${f.editable ? 1 : 0}]]></value>
              </action>
              <action>
                  <action_id>set_${f.type}_${idMap[field]}_required</action_id>
                  <action_type>set_attribute_value</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <attribute>required</attribute>
                  <value><![CDATA[${f.required ? 1 : 0}]]></value>
              </action>
              <action>
                  <action_id>set_permission_${idMap[field]}_read_5</action_id>
                  <action_type>set_permission</action_type>
                  <asset>[[output://create_${f.type}_${
                                    idMap[field]
                                }.assetid]]</asset>
                  <permission>1</permission>
                  <granted>1</granted>
                  <userid>[[system://public_user]]</userid>
              </action>
              `;
                                //Options if Select
                                if (f.type == "metadata_field_select") {
                                    var options = "";
                                    for (var option in f.options) {
                                        options += `'${option}' => '${f.options[option]}',`;
                                    }
                                    XMLOutput += `
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
                  `;
                                }
                            }
                        }
                        XMLOutput += `</actions>`;

                        //Write XML
                        fs.writeFileSync(
                            `${outputPath}/${templateName}/import.xml`,
                            XMLOutput
                        );
                    }

                    //Compile static HTML version of the template
                    const compiledHTML = Handlebars.compile(
                        templateDataPresentation
                    );
                    //Write Static HTML File

                    fs.writeFileSync(
                        `${outputPath}/${templateName}/static.html`,
                        compiledHTML({
                            component: manifestDataParsed,
                            site: siteDataParsed,
                            current: currentDataParsed,
                            content: "Lorem Ipsum",
                        })
                    );
                }

                // Compile presentation version of the template
                const compiledPresentation = Handlebars.precompile(
                    templateDataPresentation
                );

                // Write both versions of the template
                fs.writeFileSync(
                    `${outputPath}/${templateName}/presentation.js`,
                    compiledPresentation
                );
            });
        });
    }
}

module.exports = PrecompilePlugin;
