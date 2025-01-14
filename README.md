# Programacion Movil TAV - 001 

## Comandos de Git

### 1. **`git add .`**
Este comando agrega todos los archivos modificados y nuevos al área de preparación (staging area) para que puedan ser incluidos en el próximo commit. El punto (`.`) indica que se agregarán todos los cambios en el directorio actual y subdirectorios.

### 2. **`git commit -m "escribir los cambios realizados"`**
Crea un nuevo commit con los cambios que se han agregado al área de preparación. El mensaje entre comillas (`"escribir los cambios realizados"`) describe brevemente los cambios realizados en el commit.

### 3. **`git push origin RamaPropia`**
Este comando envía (empuja) los cambios locales de tu rama (`RamaPropia`) al repositorio remoto llamado `origin`. Esto actualiza la rama remota con los commits que has hecho localmente.

### 4. **`git rebase main`**
Este comando aplica los cambios de la rama `main` sobre la rama actual. Es decir, se mueve la base de tu rama actual al final de la rama `main`, lo que permite que los commits de la rama `main` se apliquen antes que tus propios cambios. Este comando es útil cuando se quiere mantener un historial limpio y evitar los merges conflictivos.

### 5. **`git branch nombre_de_Rama`**
Crea una nueva rama llamada `nombre_de_Rama`. Este comando no cambia la rama actual en la que te encuentras, solo la crea.

### 6. **`git checkout nombre_Rama`**
Cambia a la rama especificada (`nombre_Rama`). Después de usar este comando, todos los cambios que realices serán en esa rama, no en la rama anterior.

---
**Nota:** Recuerda siempre hacer un `git pull` antes de realizar un `git push` para asegurarte de que tu rama esté actualizada con la versión más reciente del repositorio remoto.

**Nota** Codespace es una maquina virtual que funciona solo para ti por lo cual cuando instalas ionic en tu entorno ese funcionara para ti y poder hacer funcionar el repositorio general 


## Comandos Ionic 

### 1. **`npm install -g @ionic/cli`**

Esto nos permitira instalar ionic en el codespace que estamos trabajando a nivel global, este ultimo es gracias al parametro -g 

### 2 **`ionic generate page nombreCarpeta/nombrePagina`**

Crearemos una carpeta y en su interior creara una pagina 
**Nota**
Cuando creamos una pagina debemos ir al archivo page.ts para poder declarar la pagina como standalone: false 
### 3 **`ionic generate component nombreCarpeta/nombreComponente`**

Crearemos un componente que nos permitira utilizarlo en nuestra aplicacion 

**Nota** 
Recordemos que para utilizar el componente dentro de nuestra pagina debemos importarlo en nuestra page.module.ts 

### 4 **`ionic generate service nombreCarpeta/nombreservicio`**

nos permitira crear un servicio , esto nos puede servir para configurar y consumir una api por ejemplo 

### 5 **`ionic generate guard nombreCarpeta/nombreGuard`**

Nos permite crear un archivo en el que puedo configurar el comportamiento de la aplicacion frente a algunas rutas como por ejemplo si deseo que el usuario ha iniciado session se pueda redirigir de inmediato a home

**Nota** 
Recuerda que el guard se activa en la pagina de rutas que es en el app.routing.module.ts el cual en la ruta que queremos afectar debemos agregar canActivate:NombreGuard 

### instalar ionic Storage 

### 1 **`npm install @ionic/storage-angular `**
con esto instalaremos ionic storage para el proyecto

### 2 **`importar el modulo para utilizarlo en el proyecto  `**
para que en nuestro proyecto pueda funcionar ionic storage debemos ir a nuestro archivo app.module.ts y en el debemos importar 
    IonicStorageModule.forRoot()
Luego de esto podremos recien importar he utilizar el storage en nuestras paginas 
