# React + TypeScript + Vite

¡Saludos! 👋

Si has llegado hasta aquí seguramente quieras informarte acerca de este proyecto.

ChatGPT, you shall not pass que diria Gandalf 🧙‍♂️

No obstante y por si acaso, larga vida a Skynet.

## Resumen

Es un proyecto React con ficheros .tsx realizado con VITE.

Mi idea original es poder usar este frontend para mi proyecto de MERN (Mongo, Express, React y Node), por lo que lo iré puliendo poco a poco.

La versión de [node](https://nodejs.org/en) con la que se ha desarrollado es la 18.

La parte funciona de los componentes se ha hecho con [Prime React](https://primereact.org/).

Siguiendo el mismo ecosistema usamos [Prime Flex](https://primeflex.org/), dado que se parece mucho a Tailwind CSS y permite estilar muy rápido.

En cuanto a los iconos, algunos son de [Prime Icons](https://primereact.org/icons/) y otros son [React Icons](https://react-icons.github.io/react-icons/search)

Se utiliza Axios para gestionar las llamadas a la API, que de momento **se usa la una API de prueba**, [Fake API Store](https://nodejs.org/en).

Como se indica en la documentación de la API, tan solo se pueden comprobar que las peticiones funcionan desde la consola del navegador, dado que **los datos no se modifican**.

### Esto es más feo que una nevera por detrás

Por el momento me he centrado únicamente en a funcionalidad, poco a poco se irá poniendo con un diseño adecuado, por ejemplo un componente de loading bonito, header, footer, revisión del responsive, etc.

Puedes ver el proyecto operativo en [esta url](https://unpocodereact.com/)

### Calidad y código bonito

Con la idea de que haya un "mínimo de calidad de código", sin aún usar tests, **recomiendo instalar siguientes extensiones de VS Code**:

- ESLint
- Prettier

Antes de un commit se realizar ciertas comprobaciones de código gracias a `husky`, por lo que si hay errores detectados es posible que el código no se suba al repositorio correspondiente.

### Comandos de VITE y otros comandos

`npm run dev` Levanta el proyecto.

`npm run build` Genera el compilado del proyecto, se encuentra en la carpeta **dist**.

`npm run preview` Levanta el proyecto compilado. Acción **muy recomendable** de hacer y/p antes de subir el compilado a producción.

`npm run lint` Comprueba el código en busca de fallos.

### Zustand y el estado global

Se usa Zustand para controlar el estado global de ciertos datos que me interesa tener disponible en varios componentes, como por ejemplo el usuario.

### No más pantallas blancas de la muerte

Cuando una aplicación de JavaScript "se rompe" sale un pantallazo blanco, para evitar esto se ha configurado un `Error Boundary` que engloba toda la app.

Se mejorará su estilo en futuros commits y pushes.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
