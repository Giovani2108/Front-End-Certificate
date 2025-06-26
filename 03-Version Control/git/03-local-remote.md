#!/bin/bash

# =======================================================
# Git: Repositorio local y remoto (inicio desde cero)
# =======================================================

# Este apunte explica cómo conectar un proyecto local con GitHub.
# Ideal si NO usaste 'git clone', sino que empezaste desde tu carpeta local.

# -------------------------------------------------------
# 1. Iniciar un repositorio local
# -------------------------------------------------------

# Dentro de tu carpeta de proyecto:
git init

# Esto crea una carpeta oculta .git → ya es un repo local

# -------------------------------------------------------
# 2. Añadir un repositorio remoto
# -------------------------------------------------------

# En GitHub, crea un repositorio vacío (sin README ni nada)

# Luego conecta tu carpeta local con el remoto:
git remote add origin https://github.com/usuario/repositorio.git

# 'origin' es solo un nombre (puede cambiarse, pero casi siempre se llama así)

# -------------------------------------------------------
# 3. Crear la rama principal (si no existe)
# -------------------------------------------------------

# Git puede iniciar sin ramas. Asegúrate de estar en una rama válida:
git checkout -b main

# -------------------------------------------------------
# 4. Añadir archivos, hacer commit y subirlos
# -------------------------------------------------------

git add .                         # Añade todos los archivos
git commit -m "Primer commit"     # Guarda el punto inicial

# Sube la rama al remoto por primera vez:
git push -u origin main

# El -u conecta tu rama local con la remota (solo se necesita 1 vez)

# -------------------------------------------------------
# 5. Obtener cambios desde el remoto
# -------------------------------------------------------

# Si alguien más hizo cambios en GitHub:
git pull origin main

# Esto baja los cambios de la rama 'main' del remoto

# -------------------------------------------------------
# Resumen práctico
# -------------------------------------------------------

# git init                         ← Inicia repositorio local
# git remote add origin URL       ← Conecta con GitHub
# git checkout -b main            ← Crea rama principal
# git add . && git commit -m ""   ← Prepara y guarda cambios
# git push -u origin main         ← Sube todo al remoto
# git pull origin main            ← Trae cambios del remoto

# -------------------------------------------------------
# Fin del apunte
# -------------------------------------------------------