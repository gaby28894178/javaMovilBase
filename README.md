# javaMovilBase

Instalador NPX para crear proyectos Android/Java base con un "Hola Mundo" listo para correr en emulador.

## Uso

Ejecutá este comando para crear un nuevo proyecto:

```bash
npx https://github.com/gaby28894178/javaMovilBase mi-nuevo-proyecto
```

Esto creará una carpeta `mi-nuevo-proyecto` con un proyecto Android completo listo para compilar.

## Requisitos del proyecto generado

- Android Studio o editor con soporte Android
- Java JDK 17+
- Android SDK (API 34)
- Emulador Android configurado (AVD)

## Qué incluye el template

- Proyecto Android con Gradle 8.6 y AGP 8.4.0
- Activity principal con "¡Hola Mundo!"
- Material Design configurado
- compileSdk 34, minSdk 24, targetSdk 34
- Java 17

## Después de crear el proyecto

```bash
cd mi-nuevo-proyecto

# Compilar
.\gradlew.bat assembleDebug    # Windows
./gradlew assembleDebug         # Linux/Mac

# Instalar en emulador
.\gradlew.bat installDebug

# Abrir la app
adb shell am start -n com.ejemplo.proyectobase/.MainActivity
```

## Estructura del proyecto

```
javaMovilBase/
├── bin/
│   └── cli.js              # Script que ejecuta npx
├── template/               # Proyecto Android base
│   ├── app/
│   │   ├── build.gradle
│   │   ├── proguard-rules.pro
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/ejemplo/proyectobase/
│   │       │   └── MainActivity.java
│   │       └── res/
│   │           ├── layout/activity_main.xml
│   │           └── values/
│   │               ├── strings.xml
│   │               └── themes.xml
│   ├── gradle/wrapper/
│   ├── build.gradle
│   ├── settings.gradle
│   ├── gradle.properties
│   ├── gradlew
│   └── gradlew.bat
├── package.json
├── .gitignore
└── README.md
```

## Cómo funciona

1. `npx` descarga este repositorio
2. Busca el comando en la sección `bin` del `package.json`
3. Ejecuta `bin/cli.js`
4. El script copia la carpeta `template/` al directorio que elijas
