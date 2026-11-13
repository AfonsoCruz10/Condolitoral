from PIL import Image, ImageDraw

# 1. Abrir a imagem de origem
img = Image.open("logo.jpg").convert("RGBA")
w, h = img.size

# 2. Criar uma cópia temporária para mapear apenas o fundo exterior
temp = img.copy()
# Inundar o fundo exterior a partir de todos os cantos com uma cor-chave (ciano)
# Usar thresh=20 evita que o floodfill "salte" por linhas vermelhas finas
corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
for corner in corners:
  ImageDraw.floodfill(temp, corner, (0, 255, 255, 255), thresh=20)

# 3. Reconstruir a imagem final:
# - Onde temp é ciano -> fica 100% transparente (fundo exterior)
# - Onde img é vermelho -> mantém o vermelho original
# - Todo o resto (janelas e linhas internas, mesmo com pequenas aberturas) -> branco sólido (255, 255, 255, 255)
orig_pixels = img.getdata()
mask_pixels = temp.getdata()

final_pixels = []
for (r, g, b, a), (mr, mg, mb, ma) in zip(orig_pixels, mask_pixels):
  if mr == 0 and mg == 255 and mb == 255:
    # Fundo exterior -> transparente
    final_pixels.append((255, 255, 255, 0))
  elif r > 150 and g < 100 and b < 100:
    # Píxel vermelho do prédio -> mantém a cor original
    final_pixels.append((r, g, b, 255))
  else:
    # Interior (janelas, incluindo as 5 com frestas, e separadores) -> branco opaco
    final_pixels.append((255, 255, 255, 255))

img.putdata(final_pixels)

# 4. Recortar margens transparentes e centrar num quadrado perfeito
bbox = img.getbbox()
if bbox:
  cropped = img.crop(bbox)
  max_side = max(cropped.size)
  canvas_size = int(max_side * 1.08)
  transparent_icon = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
  offset = (
      (canvas_size - cropped.width) // 2,
      (canvas_size - cropped.height) // 2,
  )
  transparent_icon.paste(cropped, offset)
else:
  transparent_icon = img

# 5. Gerar todas as variações necessárias para my-app/public/
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512),
}

for filename, size in sizes.items():
  resized = transparent_icon.resize(size, Image.Resampling.LANCZOS)
  resized.save(filename, format="PNG")

transparent_icon.save(
    "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)]
)
print("Os 6 ícones foram gerados com todas as janelas a branco!")