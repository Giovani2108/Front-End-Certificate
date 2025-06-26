#!/bin/bash

# ========================================
# Apuntes de BASH: El comando echo
# ========================================

# El comando `echo` se usa para imprimir texto en la terminal.
# Es ideal para mostrar mensajes, escribir en archivos, trabajar con scripts
# y mostrar variables.

# ----------------------------------------
# 1. Uso básico de echo
# ----------------------------------------

echo Hola mundo
# Imprime: Hola mundo

echo "Este es un mensaje entre comillas"
# Las comillas permiten usar espacios y conservar texto exacto

# También puedes usar comillas simples:
echo 'Mensaje con comillas simples'

# ----------------------------------------
# 2. Saltos de línea y texto con caracteres especiales
# ----------------------------------------

echo -e "Primera línea\nSegunda línea"
# -e permite interpretar caracteres especiales como:
# \n : nueva línea
# \t : tabulación
# \\ : barra invertida
# \" : comillas dobles

echo -e "Columna 1\tColumna 2"

# ----------------------------------------
# 3. Imprimir sin salto de línea al final
# ----------------------------------------

echo -n "Texto sin salto final"
# Normalmente `echo` agrega un salto de línea al final. `-n` lo evita.

# ----------------------------------------
# 4. Usar echo para crear archivos (redirección)
# ----------------------------------------

echo "Mi primera línea de texto" > archivo.txt
# Crea o sobrescribe archivo.txt con ese contenido

echo "Segunda línea añadida" >> archivo.txt
# Añade al final sin borrar lo anterior

# Puedes verificar:
cat archivo.txt

# ----------------------------------------
# 5. echo con variables
# ----------------------------------------

# Definir una variable
nombre="Carlos"

# Usar en echo
echo "Hola, $nombre"

# O usar comillas simples para evitar expansión:
echo 'Hola, $nombre'  # Imprime literalmente "$nombre"

# ----------------------------------------
# 6. echo y colores (ANSI escape codes)
# ----------------------------------------

# Puedes usar códigos ANSI para darle color a la salida

echo -e "\e[31mTexto en rojo\e[0m"
echo -e "\e[32mTexto en verde\e[0m"
echo -e "\e[1;34mTexto azul en negrita\e[0m"

# Códigos comunes:
# \e[0m     → reset
# \e[1m     → negrita
# \e[3Xm    → color de texto (X = 0-7)
# \e[4Xm    → color de fondo (X = 0-7)

# ----------------------------------------
# 7. echo y comandos compuestos
# ----------------------------------------

echo "Hoy es: $(date)"
# Inserta la salida del comando `date` dentro del texto

echo "Número de archivos: $(ls | wc -l)"
# Cuenta cuántos archivos hay en el directorio actual

# ----------------------------------------
# 8. Otras notas
# ----------------------------------------

# Puedes generar archivos de configuración, scripts u otros directamente:

echo '#!/bin/bash' > script.sh
echo 'echo "Este es un script generado por echo"' >> script.sh
chmod +x script.sh
./script.sh

# ----------------------------------------

# CONCLUSIÓN
# `echo` no es solo para imprimir texto: sirve para crear archivos,
# mostrar información dinámica, dar formato visual, y comunicar dentro de scripts.

# Siguientes comandos relacionados:
# - printf: más control que echo
# - read: entrada de datos
# - tee: imprimir y guardar al mismo tiempo
# - cat: visualizar archivos completos