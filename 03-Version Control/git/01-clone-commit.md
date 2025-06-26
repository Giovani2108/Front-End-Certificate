#!/bin/bash

# =======================================================
# Módulo: Git y GitHub – Introducción práctica (Bash)
# =======================================================

# ¿Qué es Git y qué es GitHub?

# - Git: herramienta de control de versiones para seguir los cambios de tus archivos.
# - GitHub: plataforma web donde puedes alojar y compartir tus repositorios Git.

# -------------------------------------------------------
# Clonar un repositorio desde GitHub
# -------------------------------------------------------

# Opción 1: Clonar con HTTPS y token personal

# 1. Copia la URL HTTPS desde GitHub:

# 2. En tu terminal, escribe:
    git clone https://github.com/usuario/repositorio.git

# 3. Si el repo es privado, usa tu usuario y un token como contraseña.
#    (El token se genera en: https://github.com/settings/tokens)

# Opción 2: Clonar con SSH

# 1. Genera una clave SSH:
    ssh-keygen -t ed25519 -C "tu-email@example.com"

# 2. Copia tu clave pública a:
#    https://github.com/settings/keys

# 3. Clona usando SSH:
    git clone git@github.com:usuario/repositorio.git

# -------------------------------------------------------
# Modificar archivos localmente
# -------------------------------------------------------

# 1. Entra al proyecto:
#    cd repositorio

# 2. Abre, modifica o crea archivos como quieras.

# 3. Guarda los cambios con tu editor favorito.

# -------------------------------------------------------
# Crear un commit (guardar cambios localmente)
# -------------------------------------------------------

# 1. Verifica cambios:
    git status

# 2. Añade cambios:
    git add archivo.txt
#   (o todos a la vez con)
    git add .

# 3. Crea un punto de guardado:
    git commit -m "Mensaje descriptivo"

# -------------------------------------------------------
# Subir los cambios a GitHub (push)
# -------------------------------------------------------

# Después de hacer commit, súbelos:

    git push

# - Si usaste HTTPS, te pedirá tu token.
# - Si usaste SSH, no necesitarás ingresar nada más.

# -------------------------------------------------------
# Resumen rápido
# -------------------------------------------------------

# git clone <url>           ← clona el repo
# cd <repo>                 ← entra al proyecto
# git status                ← revisa cambios
# git add .                 ← prepara todos los cambios
# git commit -m "msg"       ← guarda como punto de control
# git push                  ← sube a GitHub

# -------------------------------------------------------
# Configuración inicial recomendada
# -------------------------------------------------------

# Verifica si Git está instalado:
# git --version

# Configura tu identidad:
# git config --global user.name "Tu Nombre"
# git config --global user.email "tu@email.com"

# -------------------------------------------------------
# Fin del apunte
# -------------------------------------------------------
