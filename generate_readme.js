import * as fs from "node:fs";

const files = fs.readdirSync("./k8s-community/icons/png", {recursive: true, withFileTypes: true})
    .filter(f => f.isFile());
const labelTypes = {};

for (const file of files) {
    const [category, labelType] = file.parentPath.split("/").slice(-2);
    const nameParts = file.name.split(".")[0].split("-");
    const sizeRaw = nameParts.pop();
    const size = sizeRaw ? +sizeRaw : 0;
    const name = nameParts.join("-");

    if (!(labelType in labelTypes)) {
        labelTypes[labelType] = {};    
    }
    if (!(category in labelTypes[labelType])) {
        labelTypes[labelType][category] = {};
    }
    if (name in labelTypes[labelType][category]) {
        if (labelTypes[labelType][category][name] < size) {
            labelTypes[labelType][category][name] = size;
        }
    } else {
        labelTypes[labelType][category][name] = size;
    }
}


for (const labelType in labelTypes) {
    console.log(`### \`${labelType}\` icons`);
    console.log();

    const lt = labelTypes[labelType];
    for (const category in lt) {
        const cat = lt[category];

        console.log(`#### \`${category}\``);

        for (const icon in cat) {
            const size = cat[icon];

            console.log(`![${icon}](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/${category}/${labelType}/${icon}-${size}.png)`);
        }

        console.log();
    }

    console.log();
}
