let files = [];
let images = [];
let unselectedImages = [];

function uploadFiles() {
    let uploadButton = document.getElementById('uploadButton');
    files = Array.from(uploadButton.files);

    // Display the number of uploaded files
    document.getElementById('count').innerText = files.length + ' images uploaded';
}

function displayImages() {
    let fileNames = document.getElementById('fileNames').value.split(',').map(name => name.trim());
    images = files.filter(file => {
        let nameWithoutExtension = file.name.split('.')[0];
        return fileNames.includes(nameWithoutExtension);
    });

    // Get the unselected images
    unselectedImages = files.filter(file => !images.includes(file));

    // Display the number of selected images
    document.getElementById('selectedCount').innerText = images.length + ' images selected';
}

function downloadImages() {
    images.forEach((image, i) => {
        let a = document.createElement('a');
        a.href = URL.createObjectURL(image);
        a.download = 'image' + i;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

function downloadUnselectedImages() {
    unselectedImages.forEach((image, i) => {
        let a = document.createElement('a');
        a.href = URL.createObjectURL(image);
        a.download = 'unselectedImage' + i;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
