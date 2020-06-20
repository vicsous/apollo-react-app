fetch('http://localhost:3000/graphql',
{
    method: 'POST',
    headers: { "Content-Type:": "application/json"},
    body: JSON.stringify({
        query: `
            query {
                users{
                    username
                    email
                }
            }
        `
    })
})
.then(res => res.json())
.then(data => {
    console.log(data.data)
})