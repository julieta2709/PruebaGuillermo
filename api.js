const apiKey = '4c04d553-4285-4e3a-9a6b-8ef34df33163';

const findData = () => {
    fetch(`https://freelancemjg.synchroteam.com/Api/v3?=4c04d553-4285-4e3a-9a6b-8ef34df33163`, {
            headers: {
                'authorization': 'Basic bXljb21wYW55OmZmOGU1YjYzLTBlNzQtNDEwMi1iYTkzLWM4MjlhY2ZiNThmMw==',
                'cache-control': 'no-cache'
            },
            mode: 'no-cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la API no fue exitosa.');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.error(error);
        });
}
findData()