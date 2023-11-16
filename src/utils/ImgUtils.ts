const base = '../../assets'

export function getByPath(path: any) {
    return new URL(path, import.meta.url).href;
}

export function getSeries(sid: any) {
    return base + `/images/series/${sid}.jpg`;
}

export function getCardTemp(sn: any) {
    return base + `/images/temp/${sn}.jpg`;
}


export function getCard(sn: String | string | Number | number) {
    return base + `/images/cards/${sn}.jpg`;
}

export function getCardUndefined() {
    return base + '/images/undefined.jpg';
}


export function getSvg(name: String | string) {
    return base + `/svg/${name}.svg`;
}
