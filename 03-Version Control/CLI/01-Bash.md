#!/bin/bash

# ========================================
# Introducción a BASH
# ========================================

# BASH (Bourne Again SHell) es un intérprete de comandos usado en sistemas Unix/Linux.
# Permite interactuar con el sistema operativo a través de comandos escritos en una terminal.
# También permite escribir scripts para automatizar tareas.

# ----------------------------------------
# COMANDOS BÁSICOS EN BASH
# ----------------------------------------

# 1. cd – Cambiar de directorio
# ----------------------------------------
# El comando 'cd' (change directory) se usa para moverse entre carpetas.

# Ejemplos:
cd /home/usuario           # Ir al directorio /home/usuario
cd ..                      # Subir un nivel (directorio padre)
cd ~                       # Ir al directorio personal (home)
cd                         # También va al home si se usa sin argumentos

# ----------------------------------------

# 2. ls – Listar contenido
# ----------------------------------------
# El comando 'ls' muestra el contenido de un directorio.

# Ejemplos:
ls                         # Lista los archivos del directorio actual
ls /etc                    # Lista el contenido de /etc
ls -l                      # Lista en formato detallado
ls -la                     # Lista detallada con archivos ocultos

# ----------------------------------------

# 3. pwd – Mostrar directorio actual
# ----------------------------------------
# El comando 'pwd' (print working directory) muestra la ruta actual.

pwd                        # Imprime la ruta completa del directorio actual

# ----------------------------------------

# CONCLUSIÓN
# Estos comandos básicos permiten navegar por el sistema de archivos desde la terminal.
# Practicarlos te ayudará a familiarizarte con el entorno de línea de comandos en Linux.

# Próximos comandos recomendados para aprender:
# mkdir – Crear directorios
# touch – Crear archivos
# rm – Eliminar archivos o carpetas