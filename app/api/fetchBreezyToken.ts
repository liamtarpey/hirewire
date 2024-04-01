

export function GET(request: Request) {
    return new Response(`Hello from ${process.env.VERCEL_REGION}`);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: '0000000-0000-0000-0000-00000000001'
        }
      };
      
      fetch('https://api.breezy.hr/v3/company/a745f4ad031201', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
