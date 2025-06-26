#!/bin/bash

# ========================================
# Apuntes de BASH: Uso de grep
# ========================================

# El comando 'grep' permite buscar texto dentro de archivos o salidas de comandos.
# Es extremadamente útil para filtrar resultados y encontrar patrones.

# ----------------------------------------
# 1. Buscar texto en un archivo
# ----------------------------------------

# Ejemplo básico:
grep "hola" saludo.txt
# Busca la palabra "hola" dentro del archivo saludo.txt
# Muestra las líneas donde aparece

# El texto no distingue mayúsculas/minúsculas por defecto.
# Para ignorar diferencias de mayúsculas:
grep -i "hola" saludo.txt

# ----------------------------------------
# 2. grep -w – Coincidencia exacta de palabra
# ----------------------------------------
# La opción -w busca coincidencias de palabras completas (no fragmentos)

# Ejemplo:
echo "hola holanda" | grep -w "hola"
# Resultado: solo muestra "hola holanda" si "hola" es una palabra independiente

# Sin -w, también encontraría "holanda" porque contiene "hola":
echo "hola holanda" | grep "hola"

# ----------------------------------------
# 3. grep con tuberías (|) y ls
# ----------------------------------------

# Puedes combinar grep con otros comandos usando tuberías

ls | grep "txt"
# Muestra solo los archivos que contienen "txt" en su nombre
# Útil para filtrar entre muchos archivos

ls -l | grep "^d"
# Muestra solo las líneas que empiezan con "d" (es decir, directorios)

# Otro ejemplo:
ps aux | grep firefox
# Muestra los procesos relacionados con "firefox"

# ----------------------------------------
# 4. Buscar en varios archivos
# ----------------------------------------

grep "TODO" *.sh
# Busca la palabra TODO en todos los archivos con extensión .sh del directorio

grep -rn "funcion" src/
# -r: busca recursivamente
# -n: muestra el número de línea
# Busca "funcion" en todos los archivos dentro de la carpeta 'src'

# ----------------------------------------
# 5. grep -v – Invertir coincidencias
# ----------------------------------------

# Muestra todas las líneas que NO contienen el patrón
grep -v "ERROR" log.txt

# ----------------------------------------
# 6. grep con expresiones regulares
# ----------------------------------------

# grep también permite buscar usando patrones más complejos (regex)

grep "[0-9]\{4\}" archivo.txt
# Busca números de cuatro dígitos

# ----------------------------------------

# CONCLUSIÓN
# 'grep' es una herramienta poderosa para buscar, filtrar y analizar texto.
# Combinado con pipes y otros comandos, es esencial para administración de sistemas y desarrollo.

# Siguientes temas sugeridos:
# - egrep y patrones extendidos
# - grep con find
# - sed y awk para procesar texto más avanzado