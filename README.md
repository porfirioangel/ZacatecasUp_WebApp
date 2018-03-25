# Zacatecas UP Admin WebApp

## Instalación de dependencias

**Instalar nodejs:**

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

cd ~

sudo mkdir .npm-global

npm config set prefix '.npm-global'

echo 'export PATH=~/.npm-global/bin:$PATH' | sudo tee --append .profile > /dev/null

source .profile
```


**Instalar angular:**

```bash
npm install -g @angular/cli@latest

npm install --save-dev @angular/cli@latest

# Si la instalación falla:

npm uninstall -g @angular/cli

npm uninstall --save-dev @angular/cli

npm cache verify

npm cache clean --force

npm install

npm install -g @angular/cli@latest

npm install --save-dev @angular/cli@latest
```

## Ejecución y Compilación:

**Correr el proyecto en modo desarrollo:**

```bash
ng serve
```

**Compilar proyecto para uso en producción:**

```bash
ng build --base-href /base/ --env prod

sed -i 's,<base href="/base/">,<base href="./">,g' /var/www/html/base/index.html

# Donde 'base' es la carpeda dentro de /var/www/html donde se colocará el proyecto
```