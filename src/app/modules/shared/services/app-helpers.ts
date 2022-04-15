import * as moment from 'moment';

export function getUrlWithParams(data: { path: string[], parameters: { [key: string]: any } }): string {
    const left = getUrl(...data.path);
    const right = Object.keys(data.parameters).map(key => {
        const value = data.parameters[key];
        if (!isEmpty(value)) {
            if (Array.isArray(value)) {
                return value.map(x => `${key}=${x}`).join('&');
            }
            if (value instanceof Date) {
                const date = moment(value).format(moment.HTML5_FMT.DATE);
                return `${key}=${date}`;
            }
            return `${key}=${value}`;
        }
        return null;
    }).filter(x => x).join('&');
    return [left, right].filter(x => x).join('?');
}

export function getUrl(...parts: string[]): string {
    return combine('/api', ...parts);
}

export function combine(...parts: string[]): string {
    const result = parts.reduce((acc, part, index) => {
        if (!part) {
            return acc;
        }
        if (index === 0) {
            return part;
        }
        if (acc.endsWith('/') && part.startsWith('/')) {
            return acc + part.substr(1);
        }
        if (!acc.endsWith('/') && !part.startsWith('/')) {
            return acc + '/' + part;
        }
        return acc + part;
    }, '');
    return result;
}

export function isEmpty(value: any): boolean {
    return value === null || typeof value === 'undefined' || /*(!Array.isArray(value) && isNaN(value)) ||*/ value === '';
}
