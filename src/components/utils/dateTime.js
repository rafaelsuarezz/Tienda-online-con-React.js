/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    let today = new Date();
    let months = [
        'Ene.', 'Feb.', 'Mar.', 'Abr.', 'Mayo', 'Jun.',
        'Jul.', 'Agos.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'
    ];

    let monthName = months[today.getMonth()];
    let date = today.getDate() + ' de ' + monthName + ' de ' + today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date + ' ' + time;

    return dateTime;
}

// export  const dateTime = () => {
//     const date = new Date().toLocaleDateString();
//     return date
// }