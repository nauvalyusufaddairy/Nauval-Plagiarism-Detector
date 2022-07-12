import React, { useState } from "react";

function UploadPage() {
  function parseWordDocxFile(inputElement) {
    // var files = inputElement.files || [];
    // if (!files.length) return;
    // var file =inputElement.target.files[0]

    console.time();
    var reader = new FileReader();
    reader.onloadend = function (event) {
      var arrayBuffer = reader.result;
      // debugger

      window.mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          //result2.innerHTML = resultObject.value
          console.log(resultObject.value);
        });
      console.timeEnd();
    };
    reader.readAsArrayBuffer(inputElement.target.files[0]);
  }
 

  return (
    <div>
      <input type="file" onChange={parseWordDocxFile} />
    </div>
  );
}

export default UploadPage;
