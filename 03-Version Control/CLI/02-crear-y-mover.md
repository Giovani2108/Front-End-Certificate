#!/bin/bash

# ========================================
# Apuntes de BASH: mkdir, touch y mv
# ========================================

# En este documento encontrarás una introducción práctica y explicativa
# sobre tres comandos esenciales para trabajar con archivos y directorios.

# ----------------------------------------
# 1. mkdir – Crear directorios
# ----------------------------------------

# 'mkdir' significa "make directory". Se usa para crear nuevas carpetas.

# Sintaxis:
# mkdir [nombre_del_directorio]

# Ejemplos:
mkdir proyecto                # Crea una carpeta llamada 'proyecto' en el directorio actual
mkdir -p carpeta1/carpeta2   # Crea carpeta1 y, dentro de ella, carpeta2 (si no existen)

# ----------------------------------------
# 2. touch – Crear archivos vacíos (o actualizarlos)
# ----------------------------------------

# 'touch' se usa para crear archivos vacíos o actualizar la fecha de modificación de un archivo existente.

# Sintaxis:
# touch [nombre_del_archivo]

# Ejemplos:
touch archivo.txt             # Crea un archivo vacío llamado 'archivo.txt'
touch index.html app.js       # Crea múltiples archivos al mismo tiempo

# Nota:
# Si el archivo ya existe, simplemente actualiza su fecha de modificación sin borrarlo.

# ----------------------------------------
# 3. mv – Mover o renombrar archivos y carpetas
# ----------------------------------------

# 'mv' (move) sirve para mover archivos y también para renombrarlos.

# Sintaxis:
# mv [origen] [destino]

# Ejemplos:
mv archivo.txt carpeta/         # Mueve 'archivo.txt' a la carpeta indicada
mv archivo1.txt archivo2.txt    # Renombra archivo1.txt a archivo2.txt

# También sirve para mover directorios completos:
mv carpeta1 carpeta2/           # Mueve 'carpeta1' dentro de 'carpeta2'

# ----------------------------------------
# 4. Uso del comodín '*' con mv
# ----------------------------------------

# El comodín * (asterisco) representa "cualquier cosa" en nombres de archivo.

# Ejemplo:
mv *.md apuntes/                # Mueve todos los archivos que terminan en '.md' al directorio 'apuntes/'

# Más ejemplos:
mv *.txt documentos/            # Mueve todos los .txt
mv img_*.png imagenes/          # Mueve archivos que empiecen con "img_" y terminen en .png

# Nota:
# Asegúrate de que el directorio de destino exista o el comando fallará.

# ----------------------------------------
# CONCLUSIÓN

# Con 'mkdir', 'touch' y 'mv', puedes crear y organizar fácilmente archivos y directorios desde la terminal.

# El uso de comodines como '*' te permite trabajar con múltiples archivos de forma rápida y flexible.

# Combinados con comandos como 'cd', 'ls' y 'pwd', ya puedes empezar a manejar tu sistema de archivos de forma eficiente.

# Comandos sugeridos para seguir aprendiendo:
# cp – Copiar archivos y carpetas
# rm – Eliminar archivos o carpetas
# nano o vim – Editar archivos desde la terminal