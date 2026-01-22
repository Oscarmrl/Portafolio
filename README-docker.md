# Configuración Docker para el Portafolio

Esta configuración Docker permite ejecutar la aplicación en diferentes entornos.

## Archivos creados

1. **Dockerfile** - Para construcción de producción con Nginx
2. **Dockerfile.dev** - Para entorno de desarrollo (con herramientas de compilación)
3. **docker-compose.yml** - Para gestión de servicios
4. **nginx.conf** - Configuración del servidor web
5. **.dockerignore** - Archivos excluidos de Docker
6. **README-docker.md** - Este archivo de instrucciones

## Comandos disponibles

### Producción (configuración simplificada)

```bash
# Construir y ejecutar en producción
docker-compose -f docker-compose.simple.yml up prod

# Solo construir imagen de producción
docker-compose -f docker-compose.simple.yml build prod

# Ejecutar en segundo plano
docker-compose -f docker-compose.simple.yml up -d prod
```

### Desarrollo (configuración completa)

```bash
# Construir y ejecutar en modo desarrollo
docker-compose up dev

# Solo construir
docker-compose build dev

# Ejecutar en segundo plano
docker-compose up -d dev

# Ver logs
docker-compose logs -f dev
```

### Producción (configuración completa)

```bash
# Construir y ejecutar en producción
docker-compose up app

# Solo construir imagen de producción
docker-compose build app

# Ejecutar en segundo plano
docker-compose up -d app
```

### Comandos útiles

```bash
# Detener todos los servicios
docker-compose down

# Eliminar volúmenes y contenedores
docker-compose down -v

# Reconstruir y reiniciar
docker-compose up --build

# Ver estado de los servicios
docker-compose ps

# Ejecutar comandos dentro del contenedor
docker-compose exec dev npm run lint
```

## Puertos

### Configuración completa

- **Desarrollo**: `http://localhost:5173`
- **Producción**: `http://localhost:8080`
- **Previsualización**: `http://localhost:4173`

## Variables de entorno

Las variables de entorno se configuran automáticamente:

- `NODE_ENV=development` para desarrollo
- `NODE_ENV=production` para producción

## Estructura de la configuración

### Dockerfile (Producción con Nginx)

- Usa multi-stage build
- Etapa 1: Construcción con Node.js
- Etapa 2: Servidor Nginx para servir archivos estáticos
- Optimizado para tamaño y rendimiento

### Dockerfile.dev (Desarrollo completo)

- Incluye herramientas de compilación para dependencias nativas
- Incluye todas las dependencias de desarrollo
- Monta volúmenes para hot-reload
- Expone puerto de desarrollo de Vite

### nginx.conf

- Configuración optimizada para React Router
- Compresión gzip habilitada
- Headers de cache para archivos estáticos
- Redirección de rutas a index.html

## Despliegue en producción

Para desplegar en un servidor:

```bash
# Construir imagen
docker build -t portafolio:latest .

# Ejecutar contenedor
docker run -d -p 80:80 --name portafolio portafolio:latest

# Con docker-compose
docker-compose up -d app
```

## Notas importantes

1. **React Router**: La configuración de nginx maneja correctamente las rutas de React Router
2. **Cache**: Los archivos estáticos tienen headers de cache optimizados
3. **Tamaño**: La imagen de producción es pequeña (~20MB) gracias al uso de nginx:alpine
4. **Seguridad**: Se excluyen archivos sensibles con .dockerignore
5. **Desarrollo**: Hot-reload funciona correctamente con volúmenes montados

## Solución de problemas

### Error de permisos

```bash
# En Linux/Mac
sudo docker-compose up

# O cambiar permisos
sudo chown -R $USER:$USER .
```

### Puerto en uso

```bash
# Cambiar puertos en docker-compose.yml
ports:
  - "3000:5173"  # Cambiar primer número
```

## Personalización

Para cambiar configuraciones:

1. **Puertos**: Modificar `docker-compose.yml`
2. **Variables de entorno**: Agregar en `environment:` de cada servicio
3. **Configuración nginx**: Modificar `nginx.conf`
4. **Dependencias**: Actualizar `package.json` y reconstruir
