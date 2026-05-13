# Proyecto Base - Hola Mundo Android

Proyecto Android base con un "Hola Mundo" listo para correr en el emulador.

## Requisitos

- Android Studio o editor con soporte Android (VS Code + extensiones)
- Java JDK 17+
- Android SDK (API 34)
- Emulador Android configurado (AVD)

## Estructura del proyecto

```
proyecto-base/
├── app/
│   ├── build.gradle
│   ├── proguard-rules.pro
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── java/com/ejemplo/proyectobase/
│       │   └── MainActivity.java
│       └── res/
│           ├── layout/
│           │   └── activity_main.xml
│           └── values/
│               ├── strings.xml
│               └── themes.xml
├── gradle/wrapper/
│   ├── gradle-wrapper.jar
│   └── gradle-wrapper.properties
├── build.gradle
├── settings.gradle
├── gradle.properties
├── gradlew
├── gradlew.bat
└── README.md
```

## Versiones utilizadas

| Componente | Versión |
|---|---|
| Gradle | 8.6 |
| Android Gradle Plugin (AGP) | 8.4.0 |
| compileSdk | 34 |
| minSdk | 24 |
| targetSdk | 34 |
| Java | 17 |

## Cómo correr en el emulador

### 1. Abrir un emulador

Listar emuladores disponibles:
```bash
emulator -list-avds
```

Iniciar un emulador (reemplazar NOMBRE_AVD por el nombre de tu emulador):
```bash
emulator -avd NOMBRE_AVD
```

### 2. Compilar el proyecto

```bash
.\gradlew.bat assembleDebug
```

### 3. Instalar en el emulador

```bash
.\gradlew.bat installDebug
```

### 4. Abrir la app

```bash
adb shell am start -n com.ejemplo.proyectobase/.MainActivity
```

O simplemente buscá "Proyecto Base" en el launcher del emulador.

## Solución de problemas

### Error "Minimum supported Gradle version is X.X"

El archivo `gradle/wrapper/gradle-wrapper.properties` ya tiene configurada la versión correcta (8.6). Si el error persiste en el editor:

1. Ejecutá `.\gradlew.bat --version` para verificar que usa Gradle 8.6
2. En VS Code: Ctrl+Shift+P → "Java: Clean Java Language Server Workspace" → Restart

### Error de compilación

Verificá que tenés Java 17:
```bash
java -version
```

Limpiá y recompilá:
```bash
.\gradlew.bat clean assembleDebug
```

## Cómo modificar

- **Cambiar el texto**: Editá `app/src/main/res/layout/activity_main.xml`
- **Agregar lógica**: Editá `app/src/main/java/com/ejemplo/proyectobase/MainActivity.java`
- **Cambiar nombre de la app**: Editá `app/src/main/res/values/strings.xml`
- **Cambiar colores/tema**: Editá `app/src/main/res/values/themes.xml`
