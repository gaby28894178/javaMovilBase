#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { cyan, green, red, yellow } = require('kleur');

async function main() {
  const projectName = process.argv[2] || 'mi-proyecto-android';
  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, '../template');

  console.log(cyan(`\n📱 Creando proyecto Android/Java en: ${targetDir}...\n`));

  // Verificar si la carpeta ya existe
  if (await fs.pathExists(targetDir)) {
    console.error(red(`❌ La carpeta "${projectName}" ya existe. Elegí otro nombre o eliminala.`));
    process.exit(1);
  }

  try {
    // Copiar la carpeta template al destino
    await fs.copy(templateDir, targetDir);

    console.log(green('✅ ¡Éxito! Proyecto base Android/Java creado.\n'));
    console.log(yellow('📋 Para empezar:\n'));
    console.log(`  cd ${projectName}`);
    console.log(`  # Abrir con Android Studio o compilar con:`);
    console.log(`  .\\gradlew.bat assembleDebug    (Windows)`);
    console.log(`  ./gradlew assembleDebug         (Linux/Mac)\n`);
    console.log(yellow('📱 Para instalar en emulador:\n'));
    console.log(`  .\\gradlew.bat installDebug`);
    console.log(`  adb shell am start -n com.ejemplo.proyectobase/.MainActivity\n`);
  } catch (err) {
    console.error(red('❌ Error al copiar el proyecto:'), err.message);
    process.exit(1);
  }
}

main();
