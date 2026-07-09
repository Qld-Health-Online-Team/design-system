/**
 * Generates a component's `dist/components/<name>/import.xml` from its
 * `manifest.json`.
 *
 * WHAT import.xml IS
 * ------------------
 * A Squiz Matrix "Bulk Actions" import file. It is NOT read at runtime by
 * anything — not the live render, not the CT edit layout, not this repo.
 * Its only consumer is a human: a developer uploads it via Matrix's bulk
 * import tool ONCE, when provisioning a brand-new component, to create:
 *
 *   - a Content_Container_Template asset (the CCT editors add to a page),
 *   - a Metadata_Schema attached to it, with a "Settings" Metadata_Section,
 *   - one Metadata_Field asset per entry in the manifest's
 *     `component.data.metadata` (name, friendly name, type, default,
 *     description, required/editable flags, and select options), and
 *   - public read permissions on the schema, section, and fields.
 *
 * After import, the CCT still needs manual wiring in Matrix: a `template`
 * attribute pointing at a template asset whose `repositorySource` metadata
 * holds this component's repo path (which is how the CT edit layout and the
 * live render locate `manifest.json` and `presentation.js` through the Git
 * File Bridge).
 *
 * LIMITATION — CREATE-ONLY, NO RE-SYNC
 * ------------------------------------
 * Every action is `create_asset`; there is no update-if-exists path.
 * Re-importing against a site that already has the component creates a
 * DUPLICATE CCT/schema/field set. Consequently the team manages existing
 * metadata schemas manually in Matrix, and a component's live schema can
 * drift from its manifest.json — this file is only trustworthy for
 * first-time provisioning.
 *
 * The `[[output://<id>.assetid]]` tokens are Matrix import syntax: they
 * cross-reference asset ids that Matrix assigns to earlier actions at import
 * time, so the ids generated here only need to be unique within one file.
 */

//capitalises the first letter of each work in a given string
const capitalise = (words) => {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
};

/**
 * Build the import.xml contents for one component.
 *
 * @param {string} templateName - The component's folder name (e.g. "accordion").
 * @param {object} manifest - The parsed manifest.json ({ component: { name, data: { metadata } } }).
 * @returns {string} The Bulk Actions XML document.
 */
function generateImportXml(templateName, manifest) {
  const manifestDataXML = manifest;

  // Derive deterministic ids from the template/field names. These
  // values are only internal cross-reference handles within this
  // import.xml (Matrix assigns the real asset ids at import time), so
  // they only need to be unique within the file. Deriving them from
  // names keeps builds reproducible and the XML diffable — adding or
  // reordering a field only touches that field's actions.
  //
  // Names are sanitised because the ids are embedded in
  // [[output://<id>.assetid]] references, which Matrix parses on ".".
  const safeId = (name) => String(name).replace(/[^A-Za-z0-9_]/g, "_");

  var idMap = {
    cct_id: `${safeId(templateName)}_cct`,
    schema_id: `${safeId(templateName)}_schema`,
    section_id: `${safeId(templateName)}_section`,
  };

  //test if we have the data and metadata objects as children
  if (
    typeof manifestDataXML.component.data !== "undefined" &&
    typeof manifestDataXML.component.data.metadata !== "undefined"
  ) {
    //grab the metadata fields
    for (const field in manifestDataXML.component.data.metadata) {
      // Namespaced with "_field_" so a field literally named
      // "cct"/"schema"/"section" can't collide with the container
      // tokens above (the un-prefixed set_permission_* action ids).
      idMap[field] = `${safeId(templateName)}_field_${safeId(field)}`;
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
              manifestDataXML.component.name,
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
              manifestDataXML.component.name,
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
    typeof manifestDataXML.component.data !== "undefined" &&
    typeof manifestDataXML.component.data.metadata !== "undefined"
  ) {
    for (const field in manifestDataXML["component"]["data"]["metadata"]) {
      var f = manifestDataXML["component"]["data"]["metadata"][field];
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
                      <action_id>set_${f.type}_${idMap[field]}_edit_params</action_id>
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

  return XMLOutput;
}

module.exports = generateImportXml;
