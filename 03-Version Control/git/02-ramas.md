#!/bin/bash

# =======================================================
# Módulo Git y GitHub – Trabajo con Ramas (branch)
# =======================================================

# Las ramas (branches) permiten trabajar en diferentes versiones del código
# sin afectar directamente la versión principal (usualmente 'main').

# -------------------------------------------------------
# Ver el estado actual del repositorio
# -------------------------------------------------------

# Antes de trabajar con ramas, revisa el estado de los archivos:
git status

# Esto te mostrará:
# - En qué rama estás
# - Qué archivos han cambiado
# - Cuáles están listos para commit

# -------------------------------------------------------
# Crear y cambiar a una nueva rama
# -------------------------------------------------------

# Este comando crea una nueva rama y cambia a ella de inmediato:
git checkout -b nombre-de-la-rama

# Ejemplo:
# git checkout -b nueva-funcionalidad

# Es equivalente a:
# git branch nueva-funcionalidad
# git checkout nueva-funcionalidad

# -------------------------------------------------------
# Ver todas las ramas locales
# -------------------------------------------------------

# Este comando lista las ramas locales y resalta la activa:
git branch

# -------------------------------------------------------
# Añadir cambios y hacer commit en la nueva rama
# -------------------------------------------------------

# Añade los archivos modificados al área de staging:
git add archivo.txt

# o todos los cambios:
git add .

# Luego crea el commit:
git commit -m "Descripción de lo que hiciste en esta rama"

# -------------------------------------------------------
# Subir una rama nueva al repositorio remoto
# -------------------------------------------------------

# Si es la primera vez que haces push de esta rama:
git push -u origin nombre-de-la-rama

# Ejemplo:
# git push -u origin nueva-funcionalidad

# El parámetro -u (o --set-upstream) vincula tu rama local con la remota,
# así la próxima vez solo necesitas hacer:
git push

# -------------------------------------------------------
# Notas adicionales
# -------------------------------------------------------

# - Las ramas te permiten trabajar de forma aislada.
# - Puedes tener varias ramas para diferentes funcionalidades o pruebas.
# - Luego puedes fusionarlas (merge) con la rama principal.

# -------------------------------------------------------
# Resumen rápido
# -------------------------------------------------------

# git status                          ← Ver en qué estado estás
# git checkout -b rama                ← Crear y cambiar a una nueva rama
# git branch                          ← Ver las ramas locales
# git add .                           ← Preparar cambios
# git commit -m "mensaje"             ← Guardar cambios en esa rama
# git push -u origin rama             ← Subirla al repositorio remoto

# -------------------------------------------------------
# Fin del apunte
# -------------------------------------------------------