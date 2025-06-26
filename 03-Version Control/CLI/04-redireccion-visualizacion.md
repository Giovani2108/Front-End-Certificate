#!/bin/bash

# ========================================
# Apuntes de BASH: Redirección y visualización
# ========================================

# En BASH puedes redirigir la salida de los comandos a archivos, reutilizar contenido
# como entrada, o capturar errores de manera controlada. Aquí repasamos los más usados.

# ----------------------------------------
# 1. Redirección de salida estándar (>)
# ----------------------------------------
# El símbolo '>' redirige la salida de un comando hacia un archivo, sobreescribiéndolo.

# Ejemplo:
ls > listado.txt
# Guarda el resultado de 'ls' en el archivo listado.txt (sobrescribe si ya existe)

# También puedes usar '>>' para AÑADIR al final sin sobrescribir:
ls >> listado.txt
# Agrega más contenido al final del archivo existente

# ----------------------------------------
# 2. Redirección de entrada estándar (<)
# ----------------------------------------
# El símbolo '<' toma el contenido de un archivo como entrada para un comando.

# Ejemplo:
sort < listado.txt
# Ordena las líneas del archivo listado.txt sin modificarlo

# ----------------------------------------
# 3. Crear archivos con cat y redirección
# ----------------------------------------
# Puedes usar 'cat' y redirección para crear archivos rápidamente.

# Ejemplo interactivo:
cat > saludo.txt
# Escribe aquí el contenido del archivo (finaliza con Ctrl+D)
# Esto crea (o sobrescribe) el archivo saludo.txt con el contenido que escribas

# Para añadir (sin borrar lo anterior):
cat >> saludo.txt
# Esto agrega más texto al final de saludo.txt

# ----------------------------------------
# 4. Redirigir errores (stderr) a un archivo
# ----------------------------------------
# Usa '2>' para capturar errores (flujo de error estándar).

# Ejemplo:
ls archivo_inexistente 2> errores.txt
# El mensaje de error va al archivo errores.txt, no a la pantalla

# También puedes combinar salida estándar y errores:
ls /noexiste /etc > salida.txt 2> errores.txt

# Redirigir ambos al mismo archivo:
ls /noexiste /etc > todo.txt 2>&1

# ----------------------------------------
# 5. Visualizar archivos largos con less
# ----------------------------------------
# 'less' permite ver archivos página por página.

# Ejemplo:
less listado.txt
# Usa las teclas:
# - Espacio o flechas para avanzar
# - q para salir
# - /texto para buscar

# También puedes ver la salida de un comando con tubería:
ls -l /etc | less

# ----------------------------------------

# CONCLUSIÓN
# La redirección es clave para automatizar, guardar resultados, y manejar errores.
# Combinada con herramientas como 'less', puedes explorar datos fácilmente.

# Siguientes comandos recomendados para aprender:
# tee – Redirige la salida a un archivo y también la muestra por pantalla
# head / tail – Leer primeras o últimas líneas de un archivo
# echo – Imprimir texto o variables, útil con redirección