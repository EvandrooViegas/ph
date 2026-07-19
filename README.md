# PH Barber — Website

Site da barbearia construído com **Next.js**, **TypeScript**, **Tailwind CSS** e componentes no estilo **shadcn/ui**.

## Como correr o projeto

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Como editar o conteúdo do site

Não precisa de mexer em código. Todos os textos, preços, links (marcação,
WhatsApp, Instagram) e caminhos das imagens estão centralizados num único
ficheiro:

```
src/data/site-data.ts
```

Abra esse ficheiro, altere os valores entre aspas e guarde. O site atualiza-se
automaticamente.

## Como substituir as imagens

As imagens estão organizadas em pastas dentro de public/images/:

```
public/images/
  logo/       -> logótipo (logo.png)
  hero/       -> imagem de fundo da secção principal (hero-bg.jpg)
  about/      -> foto da secção "Sobre Mim" (about-1.jpg)
  gallery/    -> fotos do carrossel "Excelência Garantida" (gallery-1.jpg, gallery-2.jpg, gallery-3.jpg)
  services/   -> foto da secção de serviços (services-1.jpg)
```

Basta substituir os ficheiros mantendo o mesmo nome, ou adicionar uma imagem
nova e atualizar o caminho correspondente em src/data/site-data.ts.

As imagens incluídas neste projeto são placeholders gerados automaticamente
(com o texto e as dimensões escritos por cima) apenas para indicar onde
cada imagem deve ir. Substitua-as pelas fotografias reais da barbearia.

## Sobre as fontes

- Anton — usada nos títulos principais.
- Lato — usada no texto corrido.
- Caveat — usada nos subtítulos manuscritos (ex: "Sobre Mim", "Nossos
  Serviços"). O design original pedia a fonte "Apricots", mas trata-se de uma
  fonte paga sem licença de distribuição gratuita, pelo que foi substituída
  pela Caveat (Google Fonts), que tem um estilo caligráfico muito semelhante.
  Se tiver uma licença da fonte Apricots, pode adicioná-la em
  src/app/globals.css e src/app/layout.tsx substituindo as referências à
  Caveat.

Todas as fontes estão auto-hospedadas através do pacote @fontsource, por
isso o site não depende de ligação à internet ao Google Fonts para
funcionar.

## Cores da marca

| Nome | Hex |
|---|---|
| Primária (dourado) | #c19f00 |
| Fundo escuro | #030403 |
| Secundária (cinza claro) | #d5d5d5 |

Estas cores estão definidas em src/app/globals.css.

## Mapa (secção "Nos Visite")

O mapa é um embed do Google Maps controlado pelas coordenadas em
src/data/site-data.ts (contact.map). Para atualizar a localização, gere
um novo link de "Embed a map" no Google Maps e substitua embedSrc.
