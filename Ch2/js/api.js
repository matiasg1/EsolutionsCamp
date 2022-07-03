/* Para poder realizar una busqueda por ejemplo usando el metodo 
de promesas o asyncronico se debe abrir la consola y enviar el comando 
getUsers(fetchMod) para promesas,
getUsers(asyncMod) para realizaro de manera asyncronica.
Para realizar la busqueda de un album en especifico,
se debe realizar la peticion get, pasandole por parametro
el id y nombre de la funcion, por ejemplo
getAlbum(3, fetchMod) para realizarlo con promesas y
getAlbum(3, asyncMod) para hacerlo de manera asyncronica.
*/ 

  //Forma asyncronica

  const asyncMod = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };

  // Usando promesas

  function fetchMod(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => 
        response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Hacemos las peticiones GET

  const getData = (nameFunction, url) => {
    if (nameFunction === fetchMod) {
      return fetchMod(url);
    } else if (nameFunction === asyncMod) {
      return asyncMod(url);
    }
  };
  
  const getUsers = async (nameFunction) => {
    const urlUser = 'https://jsonplaceholder.typicode.com/users';
    try {
      const dataUser = await getData(nameFunction, urlUser);
  
      console.log(destructJson(dataUser));
    } catch (error) {
      console.error(error, 'No se pudo realizar la busqueda con exito');
    }
  };
  
  const getAlbums = async (numberUser, nameFunction) => {
    const albumsUrl =
      'https://jsonplaceholder.typicode.com/users/' + numberUser + '/albums';
  
    try {
      const dataAlbum = await getData(nameFunction, albumsUrl);
      return console.log(dataAlbum);
    } catch (error) {
      console.error(error, 'No se pudo realizar la busqueda con exito');
    }
  };

  //Destructuramos el Json

  const destructJson = (dataUser) => {
    return dataUser.map((user) => {
      const {
        address: {
          city,
          geo: { lng },
          street,
          suite,
        },
        company,
        email,
        id,
        name,
        username,
        website,
      } = user;
  
      return {
        address: { 
            city, 
            geo: { lng }, 
            street, 
            suite, 
        },
        company,
        email,
        id,
        name,
        username,
        website,
      };
    });
  };
  
  
  