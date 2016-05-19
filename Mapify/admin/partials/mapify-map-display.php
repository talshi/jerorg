<?php

?>

<div id="manage_map_caption">Manage Map</div>
<div id="upload_image_container">
    <label id="upload_map_label" for="upload_image">Upload Image</label>
    <input id="upload_image" type="text" size="36" name="upload_image" value="" />
    <input id="upload_image_button" type="button" value="Upload Image" />
    <br /><div id="upload_note">Enter an URL or upload an image for the banner.</div>
</div>
<div>
    <div><label id="preview_label" class="page-header"></label></div>
    <div><img id="img_preview" class="img_preview"></img></div>
</div>

<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $("#upload_image_button").click(function (e) {
            e.preventDefault();
            var image = wp.media({
                title: 'Upload Image',
                multiple: false
            }).open()
            .on('select', function (e) {
                // This will return the selected image from the Media Uploader, the result is an object
                var uploaded_image = image.state().get('selection').first();
                // We convert uploaded_image to a JSON object to make accessing it easier
                // Output to the console uploaded_image
                //console.log(uploaded_image);
                var image_url = uploaded_image.toJSON().url;
                // Let's assign the url value to the input field
                $('#upload_image').val(image_url)
                var image_link = $('#upload_image').val();
                $("#preview_label").html("Preview:");
                $("#img_preview").attr("src", image_link);
            });
        });
    });
</script>

