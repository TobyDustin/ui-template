export const fetchFromBFF = new Promise((resolve,reject)=>{
    fetch('http://localhost:8000')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(_ => resolve({message:'WHOOPS! not connected to the BFF.',load: false}))
})
