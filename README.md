finalNodeJS


Rutas:

---------------------------------------------PRODUCT--------------------------------------------------------------------------------------------------------- 
---POST---- http://localhost:4000/api/products ----------------> ENDPOINT PARA CREAR UN PRODUCTO

	REQUEST:
		{
			"nombre": "galletas",
			"precio": 250,
			"descripcion": "galletas para coctel",
			"marca": "sell",
			"unidades": 2
		}

---PUT-ID-- http://localhost:4000/api/products/{ID} -----------> EJEMPLO DE ENDPOINT CON EL ID http://localhost:4000/api/products/6024a90b43a5656a70c12ead
---GET----- http://localhost:4000/api/products ----------------> LISTAR TODOS LOS PRODUCTOS CREADOS 
---GET-ID-- http://localhost:4000/api/products/{ID} -----------> EJEMPLO DE ENDPOINT CON EL ID http://localhost:4000/api/products/6024b802f785d65980f5f01a
---DELETE-- http://localhost:4000/api/products/{ID} -----------> EJEMPLO DE ENDPOINT CON EL ID http://localhost:4000/api/products/6024a90b43a5656a70c12ead 


PARA PODER CREAR UN NUEVO PRODUCTO, ACTUALIZAR Y ELIMINAR SE NECESITA EL PERMISO CON EL TOKEN. EN EL HEADERS TIENE QUE IR LA SIGUIENTE CABECERA "x-access-token"
Y AGREGAR EL TOKEN QUE ES GENERADO DE LA CREACION DEL USUARION CON ROL DE "ADMIN" 


EJEMPLO

KEY : x-access-token 

VALUE : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjRkMTI2ZTQzYTA0MmQxMGYwYjBhYyIsImlhdCI6MTYxMzAyODg3MSwiZXhwIjoxNjEzMTE1MjcxfQ.-ri1tr244nCRjxtZg52HF4t7TfLrfhQdJ4CSBk-PF0s



------------------------------------------------AUTH-------------------------------------------------------------------------------------------------------
--POST--- http://localhost:4000/api/auth/registrarse ------------> ENDPOINT PARA CREAR UN USUARIO 

	REQUEST: PARA CREAR UN USUARIO CON ROL DE ADMIN
		
		{
			"user": "maria",
			"email": "maria@prueba.cl",
			"pass": "pass",
			"roles" : ["admin"]
		}



















