import { readdir, stat, mkdir } from "fs/promises";
import { join, extname, basename } from "path";
import webp from "webp-converter";

const inputDir = "public/img"; //La ruta de las imagenes a convertir
const outputDir = "public/images-webp"; // Carpeta de salida para las imagenes convertidas

async function convertImagesToWebP(inputDir, outputDir) {
  try {
    await mkdir(outputDir, { recursive: true }); //permite crear directorio recursivamente
    const files = await readdir(inputDir); // lee todos los archivos del directorio de entrada

    // recorre los archivos
    for (const file of files) {
      const filePath = join(inputDir, file); // ruta del archivo
      const fileStat = await stat(filePath); // obtiene la informacion del archivo

      if (
        fileStat.isFile() &&
        [".jpg", ".jpeg", ".png"].includes(extname(file).toLowerCase())
      ) {
        const outputFilePath = join(
          outputDir,
          `${basename(file, extname(file))}.webp`
        );
        await webp.cwebp(filePath, outputFilePath, "-q 75"); // convirtiendo la imagen a formato webp
        console.log(`Converted ${file} to WebP format.`); // mensaje de exito
      }
    }
    // captura de errores
  } catch (error) {
    console.error("Error converting images to WebP:", error); // mensaje de error
  }
}

convertImagesToWebP(inputDir, outputDir);
