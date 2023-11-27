export function convertDateFormat(inputDate) {
    const dateObject = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
}