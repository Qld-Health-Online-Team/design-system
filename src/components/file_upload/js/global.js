(function () {
    'use strict';

    /**
     * @module fileUploads
     */
    let fileUploads = {
        "inputs": {}
    };

    /**
     * Loading template for file preview
     * 
     * @memberof module:fileUploads
     */
     const loadingTemplate = (file) => {

        const fileName = file.name;
        const fileTemplate = document.createElement('div');
        
        fileTemplate.classList.add('qld__form-file');

        fileTemplate.innerHTML = `<div class="qld__form-file-loader">
                            <div class="qld__loading_spinner qld__loading_spinner--landscape" role="status">
                                <span class="qld__loading_spinner-wheel"></span>
                            </div>
                        </div>
                        <div class="qld__form-file-info">
                            <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                            <span class="qld__form-file-info-status">Uploading...</span>
                        </div>
                        <div class="qld__form-file-actions"></div>`;
        
        return fileTemplate;
    }

    /**
     * Success template for file preview
     * 
     * @memberof module:fileUploads
     */
     const successTemplate = (file) => {

        const fileName = file.name;
        const fileTemplate = document.createElement('div');
        const fileSize = Math.ceil(file.size / 1000);
        const fileId = file.id != undefined ? file.id : fileName;
        let fileType = getAssetType(file.type);
        
        fileTemplate.classList.add('qld__form-file', 'qld__form-file--success');

        fileTemplate.innerHTML = `<div class="qld__form-file-loader">
                                        <i class="fa-light fa-2x fa-file${fileType.fontAwesomeClass}" aria-hidden="true"></i>
                                    </div>
                                    <div class="qld__form-file-info">
                                        <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                                        <span class="qld__form-file-info-status"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#339D37"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.82788 11.064L6.85666 9.26039L5.73438 10.4866L8.87877 13.3638L14.2677 7.97482L13.0929 6.80005L8.82788 11.064Z" fill="white"></path></svg>Upload successful, ${fileSize}KB</span>
                                    </div>
                                    <div class="qld__form-file-actions">
                                        <button class="qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn" data-file-id="${fileId}">
                                            <i class="fa-light fa-trash" aria-hidden="true"></i>Remove
                                        </button>
                                    </div>`;
        
        return fileTemplate;
    }

    /**
     * Error template for file preview
     * 
     * @memberof module:fileUploads
     */
    const errorTemplate = (file, error) => {

        const fileName = file.name;
        const fileTemplate = document.createElement('div');
        const fileId = file.id != undefined ? file.id : fileName;
        
        fileTemplate.classList.add('qld__form-file','qld__form-file--error');

        fileTemplate.innerHTML = `<div class="qld__form-file-loader">
                                        <i class="fa-light fa-2x fa-file-exclamation" aria-hidden="true"></i>
                                    </div>
                                    <div class="qld__form-file-info">
                                        <p class="qld__display-xs qld__form-file-info-name">${fileName}</p>
                                        <span class="qld__form-file-info-status"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="#E22339"></circle><path d="M10 13C9.41667 13 9 13.5357 9 14C9 14.5 9.41667 15 10 15C10.5417 15 11 14.5 11 14C11 13.5357 10.5417 13 10 13ZM10 12C10.8044 12 11 11.3214 11 11V6C11 5.5 10.5 5 10 5C9.5 5 9 5.5 9 6V11C9 11.3214 9.1956 12 10 12Z" fill="white"></path></svg>${error}</span>
                                    </div>
                                    <div class="qld__form-file-actions">
                                        <button class="qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn" data-file-id="${fileId}">
                                            <i class="fa-light fa-trash" aria-hidden="true"></i>Remove
                                        </button>
                                    </div>`;
        
        return fileTemplate;
    }

    /**
     * Return the asset type code for the selected file
     * 
     * @memberof module:fileUploads
     */
    const getAssetType = (type) => {
        let assetType = {"type":'file', "fontAwesomeClass": ''};
        let typeLowerCase = type.toLowerCase();

        switch (true) {
            case (typeLowerCase.indexOf("pdf") != -1):
                assetType = {"type":'pdf_file', "fontAwesomeClass": '-pdf'}; break;
            case (typeLowerCase.indexOf("word") != -1):
                assetType = {"type":'word_doc', "fontAwesomeClass": '-word'}; break;
            case (typeLowerCase.indexOf("image") != -1):
                assetType = {"type":'image', "fontAwesomeClass": '-image'}; break;
            case (typeLowerCase.indexOf("excel") != -1):
                assetType = {"type":'excel_doc', "fontAwesomeClass": '-spreadsheet'}; break;
            default:
                break;
        }
        
        return assetType;
    }

    /**
     * Check that the selected file is valid
     * 
     * @memberof module:fileUploads
     */
    const isFileValid = (file, input_field_settings) => {
        const currentFiles = input_field_settings.files;
        const totalFiles = currentFiles.length;
        const maxFiles = input_field_settings.max_files;
        const maxFileSize = input_field_settings.max_file_size;
        const fileTypes = input_field_settings.file_types.split(',');
        const fileSize = file.size;
        const fileName = file.name;
        // Regex testing for characters: <, >, :, ", /, \, |, ?, *
        // Also tests for control characters: (\x00 to \x1F)
        const illegalFileNameCharacters = /[<>:"/\\|?*\x00-\x1F]/;
        
        // If a file of the same name has already been uploaded to the field
        if(currentFiles.some(item => file.id == item.id)) {
            console.error('Duplicate file name');
            return `Filename: '${fileName}' already in use. Please rename file before trying again.`;
        }
        
        // If the file type is not accepted
        if(!fileTypes.some(type => file.type.match(type))) {
            console.error('Incorrect file type');
            return `The selected file must be a ${fileTypes.join(',')}`;
        }

        // If file size exceeds the maximum
        if(fileSize / (1024 * 1024) > maxFileSize) {
            console.error(`Max file size ${maxFileSize} exceeded.`);
            return `The selected file must be smaller than ${maxFileSize}MB`;
        }

        // If the max file limit has been reached
        if(totalFiles >= maxFiles) {
            console.error('Max number of files reached');
            return `You can only select up to ${maxFiles} files at the same time`;
        }

        // If the max file limit has been reached
        if(!fileSize > 0 ) {
            console.error('The selected file is empty');
            return 'The selected file is empty';
        }
       
        // If the file name contains illegal characters
        if(illegalFileNameCharacters.test(fileName)) {
            console.error(`Unsupported characters in file name. Only use letters, numbers, space, and special characters: -_(’`);
            return 'The selected file is empty';
        }

        return true;
    }

    /**
     * Initialise any file input components on the page
     * 
     * @memberof module:fileUploads
     */
     fileUploads.init = () => {
        // Store all file input fields in inputs property
        let $file_inputs = QLD.utils.listToArray(document.querySelectorAll('input[type=file].qld__file-input'));

        // Bind listeners, and initialise settings object for each input field
        for (let i = 0; i < $file_inputs.length; i++) {
            const $input = $file_inputs[i];
            const $dropzone_element = $input.closest('.qld__form-file-wrapper').querySelector('.qld__form-file-dropzone');
            const $file_list = $input.closest('.qld__form-file-wrapper').querySelector('.qld__form-file-preview'); 
            
            // Settings object for file input
            fileUploads.inputs[$input.id] = {
                "id" : $input.id,
                "input_element" : $input,
                "create_location" : $input.dataset["createLocation"],
                "files" : $input.dataset["files"] !== '' ? JSON.parse($input.dataset["files"]) : [],
                "max_file_size" : $input.dataset["maxSize"],
                "file_types" : $input.dataset["fileTypes"],
                "max_files" : $input.dataset["maxFiles"],
                "file_list_element" : $file_list,
                "dropzone_element" : $dropzone_element,
                "js_api" : $input.dataset["jsApi"]
            }

            // Add event listeners 
            addListeners(fileUploads.inputs[$input.id]);
            // Custom validation for JS API 
            if(fileUploads.inputs[$input.id].js_api === "true") {
                addValidation(fileUploads.inputs[$input.id]);
            }
        };
    }

    const addValidation = (input_field_settings)=> {
        const $input = $(input_field_settings.input_element);

        if(!$.validator.methods.jsApiFileRequired) {
            $.validator.addMethod("jsApiFileRequired", function(value, element) {
                const files = $(element).data("files");
                return files !== "" ? files.trim : true;
            }, "This field is required.");
        }

        $input.rules("add", {
            jsApiFileRequired: true
        });
    }

    const addListeners = (input_field_settings) => {
        const fileInput = input_field_settings.input_element;
        const fileInputWrapper = fileInput.closest('.qld__form-file-wrapper');
        const dropArea = fileInputWrapper.querySelector('.qld__form-file-dropzone');
        const disabledClasses = ["qld__form-file-dropzone--disabled", "qld__form-file-dropzone--updating"];

        // File delete button handler
        fileInputWrapper.addEventListener('click', (event) => {
            
            if (event.target.matches('.qld__form-file-delete-btn')) {
                event.preventDefault();
                
                const fileId = event.srcElement.dataset["fileId"];
                const $fileInfoWrapper = event.target.closest(".qld__form-file");
                
                deleteFile(input_field_settings, fileId, $fileInfoWrapper);
            }
        })
        
        // File input change handler
        fileInput.addEventListener('change', (event) => {
            event.preventDefault();

            if(!disabledClasses.some(className => dropArea.classList.contains(className))) {
                const files = event.target.files;
                handleFiles(files, input_field_settings);
            }
        });

        // Dragover event listener for dropzone
        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
            
            if(!disabledClasses.some(className => dropArea.classList.contains(className))) {
                dropArea.classList.add('qld__form-file-dropzone--dragged-over');
            }
        });
        
        // Dragleave event listener for dropzone
        dropArea.addEventListener('dragleave', (event) => {
            event.preventDefault();
            dropArea.classList.remove('qld__form-file-dropzone--dragged-over');
        });
    
        // Drop event listener for dropzone
        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            
            if(!disabledClasses.some(className => dropArea.classList.contains(className))) {
                const files = event.dataTransfer.files;
                handleFiles(files, input_field_settings);
            }

            dropArea.classList.remove('qld__form-file-dropzone--dragged-over');
        });
    
    }

    /**
     * Remove file from file input (and Matrix if using the JS API )
     * 
     * @memberof module:fileUploads
     */
    const deleteFile = async (input_field_settings, fileId, $fileInfo) => {
        const currentFiles = input_field_settings.files;
        const isError = $fileInfo.matches(".qld__form-file--error");
        const usingJsApi = input_field_settings.js_api;
        const index = currentFiles.findIndex((obj)=>{
            if (typeof(obj) === 'string') {
                return JSON.parse(obj).id === fileId;
            } else {
                return obj.id === fileId;
            }
        });

        // If file exists in currentFiles array, and it isn't a file with an error, remove it
        if(index !== -1 && !isError) {
            currentFiles.splice(index, 1);
            input_field_settings.files = currentFiles;
            // Update FileList if not using JS API
            if(usingJsApi !== "true") {
                updateFileInputFileList(input_field_settings);         
            } else {
                try {
                    await deleteAssetFromMatrix(fileId, $fileInfo)
                    setFilesDataAttribute(input_field_settings);
                } catch(error) {
                    console.log(error);
                }
            }
        }
        // Validate file input
        $(input_field_settings.input_element).valid();
        // Remove the file info box from preview list
        $fileInfo.remove();
    }

    /**
     * Send trashAsset request to Matrix
     * 
     * @memberof module:fileUploads
     */
    const deleteAssetFromMatrix = async (fileId, $fileInfo) => {
        try {
            const name = $fileInfo.querySelector(".qld__form-file-info-name").innerText;
            const file = {"name": name}; 
            const $loading = loadingTemplate(file);

            // Change text from ''Uploading' to 'Deleting' and replace current file info box
            $loading.querySelector(".qld__form-file-info-status").innerText = "Deleting...";
            $fileInfo.replaceWith($loading);
            
            // Send trashAsset request
            let trashedAsset = await jsApi.trashAsset({
                "asset_ids": fileId
            });

            if(!trashedAsset.hasOwnProperty("error")) {
                $loading.remove();
                return trashedAsset;
            } else {
                throw file;
            }

        } catch(file) {
            const $error = errorTemplate(file, "Unable to delete file");
            $fileInfo.replaceWith($error);
        }
    }

    /**
     * Toggle a class for the file dropzone
     * 
     * @memberof module:fileUploads
     */
    const toggleDropzoneClass = ($dropZone, status) => {
        const classNames = status.split(',');
        const $fileInput = $dropZone.querySelector("input[type=file]");

        classNames.forEach(className => {       
            $dropZone.classList.toggle(`qld__form-file-dropzone--${className}`);
        });
    }

    /**
     * Handle any files the user has dropped/selected
     * 
     * @memberof module:fileUploads
     */
    const handleFiles = async (files, input_field_settings) => {
        const $fileList = input_field_settings.file_list_element;
        const usingJsApi = input_field_settings.js_api;
        const $dropZone = input_field_settings.dropzone_element;
        let promiseArray = [];

        // Set 'updating' class for dropzone element
        toggleDropzoneClass($dropZone, "updating");

        // Loop over all of the passed in files, and handle them based on input_field_settings
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // Set an initial ID for the file object
            file.id = file.id !== undefined ? file.id : file.name;
            // Returns either an error message (string), or true (boolean)
            let isValid = isFileValid(file, input_field_settings);
            // Set the fileInfo block to display the loading template
            let $fileInfo = loadingTemplate(file); 
            // Append the file info box to the file preview list
            $fileList.appendChild($fileInfo);
            
            // If the file is valid
            if(isValid === true) {
                // If we're using the JS API to create file assets
                if(usingJsApi === "true") {
                    input_field_settings.input_element.value = "";
                    promiseArray.push(uploadFileJsApi(file, $fileInfo, input_field_settings));
                } else {
                    // Push file object into files array
                    input_field_settings.files.push(file);
                    promiseArray.push(simulateFileUpload(file, $fileInfo));
                }
            } else {
                $fileInfo.replaceWith(errorTemplate(file, isValid));
            }
        }
        // Only update the FileList if the JS API isn't being used
        if(usingJsApi !== "true"){
            // Default functionality for a file type input is to replace the current FileList with the newly selected file/s 
            // This will override that for subsequent interactions with the file input, or clicking the cancel button.
            updateFileInputFileList(input_field_settings);
        }
        // Once all promises have resolved, remove the updating class, and validate the field
        try {
            await Promise.all(promiseArray);
        } catch(error) {
            console.error(error);
        } finally {
            // Remove 'updating' class from dropzone
            toggleDropzoneClass($dropZone, "updating");
            // Validate file input
            $(input_field_settings.input_element).valid();
        }
    }

    /**
     * Update the FileList for the file input
     * 
     * @memberof module:fileUploads
     */
    const updateFileInputFileList = (input_field_settings) => {
        // We can't directly modify an existing populated FileList, because FileLists are read-only array-like structures (not an actual array)
        // We need to create a DataTransfer instance, and add all of the current files to it - then set that as the new input.files value
        const files = input_field_settings.files;
        const $inputField = input_field_settings.input_element;
        let dataTransfer = new DataTransfer();

        // Loop over each File object and add to the DataTransfer instance
        files.forEach(function(file) {
            dataTransfer.items.add(file);
        });
        // Set the input files value to the new 'array' of File objects
        $inputField.files = dataTransfer.files;
    }

    /**
     * Display the info box for selected/dropped files (when data-js-api is set to "false")
     * 
     * @memberof module:fileUploads
     */
    const simulateFileUpload = (file, $fileInfo) => {
        return new Promise((resolve, reject) => {
            // Quick setTimeout to simulate a file upload
            let success = successTemplate(file);
            let text = success.querySelector(".qld__form-file-info-status");
            let newText = success.querySelector(".qld__form-file-info-status").textContent.replace("successful", "complete");

            // Use successTemplate, but add different text since the file isn't actually uploaded until submission
            for (var i = 0; i < text.childNodes.length; i++) {
                var node = text.childNodes[i];
                
                // If it's the text node that contains the word 'successful'
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("successful")) {
                    node.textContent = newText;
                }
            }
            // Remove --success class, and add --complete class
            success.classList.remove("qld__form-file--success");
            success.classList.add("qld__form-file--complete");
            // Add success template
            $fileInfo.replaceWith(success);
            resolve();
        });
    }

    /**
     * Initialise JS API
     * 
     * @memberof module:fileUploads
     */
    const jsApi = (() => {
        let options = new Array();
        options["key"] = "9416674173";
        let js_api = window.location.host === "0.0.0.0:8080" || window.location.host === "localhost:8080" ? null : new Squiz_Matrix_API(options);
        
        return js_api;
    })();

    /**
     * Upload selected file to matrix
     * 
     * @memberof module:fileUploads
     */
     const uploadFileJsApi = async (file, $fileInfo, input_field_settings) => {
       
        const reader = new FileReader();
        let fileContent;

        // Base64 file data 
        reader.readAsDataURL(file);
        // File reader 
        reader.onload = () => {
            // Strip the file type declaration from the start of the string
            fileContent = reader.result.split(',')[1];
        };
        
        try {
            // Create new (empty) file asset
            let newFileAsset = await createFileAsset(file, input_field_settings);
            // JS API doesn't return proper error codes, so we have to check for the 'error' property name
            if(!newFileAsset.hasOwnProperty('error')) {
                // Update our new file asset with Base64 data (fileContent)
                let updatedFileAsset = await updateFileContents(newFileAsset, fileContent, input_field_settings);
                
                if(!updatedFileAsset.hasOwnProperty('error')) {
                    // Get new file asset attributes
                    let newFileInfo = await jsApi.getGeneral({"asset_id": updatedFileAsset.assetid,"get_attributes": 1});
                    
                    if(!newFileInfo.hasOwnProperty('error')) {
                        // We need to set the size property here, because jsApi.getGeneral doesn't return the size for some asset types
                        newFileInfo.size = file.size;
                        const $success = successTemplate(newFileInfo);
                        // Replace file info box with success template
                        $fileInfo.replaceWith($success);
                        // Update the array of files stored in the data-files attribute
                        setFilesDataAttribute(input_field_settings, newFileInfo);
                        
                        return newFileInfo;

                    } else {
                        if(newFileInfo.errorDetails?.length > 0) {
                            let err = {};
                            err.error = newFileInfo.errorDetails[0];
                            throw err.error;
                        } 
                    }
                } else {
                    throw updatedFileAsset.error;
                }
            } else {
                throw newFileAsset.error;
            }

        } catch(error) {
            const $error = errorTemplate(file, error);
            $fileInfo.replaceWith($error);
            return error;
        }
    }

    /**
     * Create empty file asset in matrix
     * 
     * @memberof module:fileUploads
     */
    const createFileAsset = async function(file, input_field_settings) {

        // Asset id of create location
        const createLocation = input_field_settings.create_location;
        const assetType = getAssetType(file.type);
        const fileName = file.name;
        
        try {
            // Create new file asset
            const newFile = await jsApi.createFileAsset({
                "parentID": createLocation,
                "type_code": assetType.type,
                "friendly_name": fileName,
                "link_type": "SQ_LINK_TYPE_1"
            });
            
            // If there's no error property present in the response
            if(!newFile.hasOwnProperty('error')) {
                return newFile;
            } else {
                if(newFile.errorDetails?.length > 0) {
                    let err = {};
                    err.error = newFile.errorDetails[0].includes("web path already exists") ? "Filename already in use. Please rename file before trying again." : newFile.errorDetails[0];
                    throw err;
                } 
            }

        } catch(error) {
            return error;
        }
    }

    /**
     * Update an empty file asset with Base64 content 
     * 
     * @memberof module:fileUploads
     */
    const updateFileContents = async (asset, fileContent) => {
        // Asset ID from JS API response
        const assetId = Object.keys(asset)[0];
        
        try {
            // Grab the locks for the asset
            let locks = await jsApi.acquireLock({
                "asset_id": assetId,
                "screen_name": "attributes",
                "dependants_only": 0,
                "force_acquire": 1
            });            
            // Update File Asset with the file contents
            let updatedFile = await jsApi.updateFileAssetContent({
                "asset_id": assetId,
                "content": fileContent
            });
            
            if(!updatedFile.hasOwnProperty('error')) {
                return updatedFile;
            } else {
                if(updatedFile.errorDetails?.length > 0) {
                    let err = {};
                    err.error = updatedFile.errorDetails[0];
                    throw err;
                } 
            }

        } catch(error) {
            return error;
        }
    }

    /**
     * Set the files data attribute for a JS API driven file input
     * 
     * @memberof module:fileUploads
     */
    const setFilesDataAttribute = (input_field_settings, newFileInfo = null) => {
        let files = input_field_settings.files;  
        
        if(newFileInfo) {
            const fileObj = {
                "id": newFileInfo.id,
                "name": newFileInfo.name
            };
    
            if(files.findIndex(file => file.id === newFileInfo.id) === -1) {
                // Push stringified object containing file assetid and name into files array
                files.push(JSON.stringify(fileObj));
            }
        }
        // Set files data attribute 
        input_field_settings.input_element.dataset["files"] = files;
    }

    QLD.fileUploads = fileUploads;

    window.addEventListener('DOMContentLoaded', function () {
        QLD.fileUploads.init();
    });

}());