//Funções que convertem o arquivo csv em um ou dois vetores.
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    processData(event.target.result);
}

function processTwoColumns(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        var tarr = [];
        for (var j = 0; j < data.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
    }
    var merged = [].concat.apply([], lines);
    let zz = []
    for (let i of merged) {
        let bb = i.replace(/,/g, '.')
        zz.push(bb)
    }
    let vv = zz.filter(function (el) {
        return el != ''
    })
    let result = treatArray(vv);

    let a = [];
    let b = [];

    for (let index = 0; index < result.length; index++) {
        if (index % 2 == 0) {
            a.push(result[index])
        } else {
            b.push(result[index])
        }
    }

    return {
        a,
        b
    };
}

function processData(csv, callback) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        var tarr = [];
        for (var j = 0; j < data.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
    }
    var merged = [].concat.apply([], lines);
    let zz = []
    for (let i of merged) {
        let bb = i.replace(/,/g, '.')
        zz.push(bb)
    }
    let vv = zz.filter(function (el) {
        return el != ''
    })
    let result = treatArray(vv);
    variavelGlobalDescritiva = result;
    return result
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function treatArray(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        !isNaN(arr[i]) ? temp.push(+arr[i]) : temp.push(arr[i])
    }
    return temp
    
}
