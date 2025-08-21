// function getOilType (setOilType, typeId) {
//     const runPostRequest = () => {
//         fetch('https://motorex.com/api/oilfinder/recommendation?lang=en-US&type='+typeId, {
//             method: 'GET'
//           }).then(r => r.json()).then(r => {
//             setOilType(r.data.components[0].usageGroups[0].products[0].productName);
//          }).catch(error => console.error('Error', error));
//     }
//     runPostRequest();
// }

// export function getCarCode (setOilType, carTitle) {
//     const runPostRequest = () => {
//         fetch('https://motorex.com/api/oilfinder/search?lang=en-US&search='+carTitle+'&catId=1&categoryName=Cars', {
//             method: 'GET'
//           }).then(r => r.json()).then(r => {
//             getOilType(setOilType, r.data.results[0].typeId);
//          }).catch(error => console.error('Error', error));
//     }
//     runPostRequest();
// }