export const VinDecoder = () => {
    let vinResponse = {};
    const runPostRequest = () => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/3KPF54AD3NE436862?format=json', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(r => r.json()).then(r => {
            vinResponse = r.Results;
            console.log('Response', vinResponse) // You will get JSON response here.
         }).catch(error => console.error('Error', error));
    }

    return (
    <div className='navBarContainer'>
        <a className='tab' href='#artdesign' onClick={runPostRequest}>
            VIN Response
        </a>
    </div>
    )
}