#!/bin/bash

# ------------------------------------------------------------
# SCRIPT DE REFERENCIA: Cómo actualizar un repositorio en GitHub
# Autor: Giovani Calderón
# Descripción: Pasos para guardar y subir cambios desde tu copia local
# ------------------------------------------------------------

# 1. Navegar al proyecto (ajusta la ruta según tu caso)
cd ~/Desktop/FrontEnd Developer

# 2. Verificar el estado actual del repositorio
# Esto muestra los archivos modificados, eliminados o nuevos
git status

# 3. Agregar todos los archivos modificados al área de preparación (staging)
git add .

# O agregar solo archivos específicos:
# git add archivo1.html archivo2.css

# 4. Hacer un commit con un mensaje claro y descriptivo
git commit -m "Descripción de los cambios realizados"

# Ejemplo:
# git commit -m "Corrijo errores en el menú responsive"

# 5. Subir los cambios al repositorio remoto en GitHub
git push

# Si es la primera vez, o acabas de cambiar de rama, puedes usar:
# git push -u origin main

# ------------------------------------------------------------
# NOTAS ADICIONALES
# ------------------------------------------------------------

# - Para ver el historial de commits brevemente:
# git log --oneline

# - Para traer los últimos cambios desde GitHub (si colaboras o cambias de PC):
# git pull

# - Asegúrate de tener un archivo .gitignore para evitar subir carpetas como node_modules
# echo "node_modules/" >> .gitignore

# - Para eliminar node_modules del repositorio si ya se subió por error:
# git rm -r --cached node_modules
# git commit -m "Elimino node_modules del repositorio"
# git push

# Fin del script
