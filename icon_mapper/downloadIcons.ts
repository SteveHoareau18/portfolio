import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { languagesConfig } from './LanguageConfig';


async function downloadIcons() {
    const assetsFolder = '../public/';
    if (!fs.existsSync(assetsFolder)) {
        fs.mkdirSync(assetsFolder);
    }

    for (const language of languagesConfig) {
        const iconUrl = language.icon.url;
        try {
            const response = await axios.head(iconUrl);
            if (response.status === 200) {
                const iconResponse = await axios.get(iconUrl, { responseType: 'arraybuffer' });
                const iconName = `${language.name}.png`;
                const iconPath = path.join(assetsFolder, iconName);
                fs.writeFileSync(iconPath, iconResponse.data);
                console.log(`Téléchargement de l'icône ${language.name} réussi`);
            }
        } catch (error) {
            console.error(`Impossible de télécharger l'icône ${language.name}: ${error}`);
        }
    }
}
downloadIcons();
