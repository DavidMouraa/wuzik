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

const formatBytesForMegabytes = (bytes) => {
    return (bytes / 1048576).toFixed(2);
}

class CreateAudio {
    constructor(file) {
        this.file = file;
        this.audio = new Audio(URL.createObjectURL(file));
        this.audio.preload = "auto";
        this.name = getFileName(file);
        this.format = getFileFormat(file);
        this.duration = "0:00";
        this.size = `${formatBytesForMegabytes(file.size)}MB`;
        this.selected = false;

        this.setDuration = (newDuration) => {
            this.duration = newDuration;
        }

        this.setFileName = (newName) => {
            this.name = newName;
        }

        this.switchSelected = () => {
            this.selected = !this.selected;
        }
    }
}

export default CreateAudio;
