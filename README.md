# Creation du projet Node.js

Pour creer un projet :

```bash
npm init -y
```

Installation de la librairie dotenv:

```bash
npm install dotenv
```

Pour l'utiliser, il faut l'importer dans le fichier js:

```javascript
require("dotenv").config();
```

ou en es6:

```javascript
import "dotenv/config";
```

Nous allons ensuite passer à la syntaxe es6, pour cela, il faut modifier le fichier package.json:

```json
{
  "type": "module"
}
```

Nous pouvons maintenant installer le paquet googlegenerativeai pour nodeJS:

```bash
npm install @google/generative-ai
```
