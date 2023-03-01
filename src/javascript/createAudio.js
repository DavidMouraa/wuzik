const getFileName = (file) => {
    const dotIndex = file.name.lastIndexOf(".");
    const name = file.name.slice(0, dotIndex);
    
    return name;
}

const getFileFormat = (file) => {
    const dotIndex = file.name.lastIndexOf(".");
    const extension = file.name.slice(dotIndex, file.name.length);

    return extension;
}

class CreateAudio {
    constructor(file) {
        this.file = file;
        this.audio = new Audio(URL.createObjectURL(file));
        this.name = getFileName(file);
        this.format = getFileFormat(file);
    }
}

export default CreateAudio;
