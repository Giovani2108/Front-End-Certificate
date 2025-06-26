#!/bin/bash

# ========================================
# Apuntes de BASH: Tuberías (|), cat y wc
# ========================================

# Las tuberías en BASH permiten encadenar comandos, enviando la salida de uno
# como entrada del siguiente. El símbolo de la tubería es: |

# Esto permite crear flujos de procesamiento muy potentes en la terminal.

# ----------------------------------------
# 1. cat – Concatenar y mostrar archivos
# ----------------------------------------
# 'cat' se usa para mostrar el contenido de un archivo en la terminal.

# Sintaxis:
# cat [archivo]

# Ejemplos:
cat archivo.txt            # Muestra el contenido de archivo.txt
cat archivo1 archivo2      # Muestra el contenido de ambos archivos, uno tras otro

# ----------------------------------------
# 2. wc – Word Count (contar palabras, líneas, caracteres)
# ----------------------------------------
# 'wc' cuenta elementos dentro de un archivo o entrada.

# Algunas opciones comunes:
# -l : contar líneas
# -w : contar palabras
# -c : contar caracteres

# Ejemplos:
wc -w archivo.txt          # Cuenta cuántas palabras hay en archivo.txt
wc -l archivo.txt          # Cuenta cuántas líneas tiene archivo.txt

# ----------------------------------------
# 3. Uso de tuberías (|) para combinar comandos
# ----------------------------------------
# La tubería toma la salida de un comando y la pasa como entrada al siguiente.

# Ejemplos:

cat archivo.txt | wc -w
# Explicación:
# - 'cat archivo.txt' imprime el contenido del archivo
# - 'wc -w' cuenta las palabras en esa salida

# Es equivalente a contar las palabras del archivo, sin necesidad de guardarlo temporalmente

# Otro ejemplo:
cat archivo.txt | grep "palabra"
# Muestra solo las líneas que contienen "palabra"

# También puedes encadenar varias tuberías:
cat archivo.txt | tr ' ' '\n' | sort | uniq -c | sort -nr
# Este comando:
# - Separa palabras una por línea
# - Las ordena
# - Cuenta cuántas veces se repite cada una
# - Muestra el resultado en orden descendente

# ----------------------------------------

# CONCLUSIÓN
# Las tuberías son una herramienta poderosa en BASH para combinar comandos.
# Dominar su uso te permite procesar texto, automatizar tareas y ahorrar tiempo.

# Comandos recomendados para seguir aprendiendo en combinación con tuberías:
# grep – Buscar texto
# sort – Ordenar líneas
# uniq – Eliminar duplicados
# tr – Reemplazar caracteres
# head / tail – Ver las primeras o últimas líneas

# ¡Practica combinando comandos y creando tus propios flujos de trabajo!