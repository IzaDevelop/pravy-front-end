export function convertLabel(label) {
    if (typeof label !== 'undefined' && label !== null) {
        return label.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').toLocaleLowerCase();
    } else {
        return '';
    }
}