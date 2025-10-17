#### Archivo generado con IA
# 🧠 Rick & Morty App

Aplicación móvil desarrollada con **React Native** y **Expo**, que permite explorar los personajes de la serie *Rick & Morty*, ver sus detalles, y marcarlos como favoritos.  
El proyecto incluye manejo de estado global, persistencia de datos, modo offline y navegación estructurada con **Expo Router**.

---

## 📋 Resumen del proyecto

Esta aplicación consume la [API pública de Rick & Morty](https://rickandmortyapi.com/) para mostrar una lista de personajes.  
Los usuarios pueden:

- Navegar entre pantallas mediante pestañas (tabs).  
- Consultar detalles de cada personaje.  
- Agregar o quitar personajes de su lista de favoritos (almacenados con **AsyncStorage**).  
- Ver un mensaje automático cuando no hay conexión a Internet (detectado con **NetInfo**).  
- Cambiar el tema visual entre claro y oscuro.  

El proyecto fue desarrollado como práctica integradora para aplicar los principales conceptos de **React Native**, **manejo de estado**, **contextos**, y **almacenamiento local**.

---

## 🚀 Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/jeronimohuincaman/dm_rick_and_morty_tp.git
cd dm_rick_and_morty_tp
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

> 💡 En caso de error de versiones, usar:
> ```bash
> npm install --legacy-peer-deps
> ```

### 3️⃣ Iniciar el proyecto

```bash
npx expo start
```

Luego, podés:
- Abrir la app en el navegador (Web),
- Escanear el código QR con la app **Expo Go** en tu teléfono, o
- Ejecutar en emulador Android/iOS.

---

## 🛠️ Tecnologías usadas

| Tecnología | Descripción |
|-------------|-------------|
| **React Native** | Framework principal para el desarrollo de la app móvil. |
| **Expo** | Herramienta para gestionar el entorno, dependencias y ejecución. |
| **Expo Router** | Manejo de rutas y navegación declarativa. |
| **React Context API** | Manejo del estado global (favoritos, tema, conexión). |
| **AsyncStorage** | Persistencia local de datos (favoritos). |
| **NetInfo** | Detección de conectividad y modo offline. |
| **Fetch API** | Consumo de la API pública de Rick & Morty. |

---

## ⚙️ Decisiones importantes

- Se eligió **Expo Router** por su simplicidad en la estructura de pantallas y navegación entre tabs.  
- El manejo de favoritos se centralizó con un **Context**, utilizando **AsyncStorage** para persistir los datos incluso al cerrar la app.  
- Se implementó un **NetworkContext** que monitorea la conexión a Internet y muestra un banner automático si el usuario pierde conectividad.  
- Se incorporó un **ThemeContext** para alternar entre modo claro y oscuro.  
- La interfaz se mantuvo simple, priorizando la usabilidad y la legibilidad del código.

---

## 📚 Qué aprendimos

Durante el desarrollo de este proyecto aprendimos a:

- Configurar un entorno de desarrollo móvil con Expo.  
- Comprender la estructura modular de Expo Router.  
- Utilizar **Context API** para manejar estados globales.  
- Persistir información localmente con **AsyncStorage**.  
- Detectar el estado de conexión del dispositivo en tiempo real.  
- Aplicar buenas prácticas de componentes y hooks personalizados.  
- Resolver conflictos de dependencias y gestionar versiones de SDK.

---

## 👨‍💻 Autores

**Jerónimo Ezequiel Huincamán**  
- Comisión: 3ro  
- Profesor/a: Sergio Arraigada  
- Materia: Desarrollo Móvil


## APK
```url
https://expo.dev/artifacts/eas/k4ptybGr7TN5BhpLxK8Daq.apk
```