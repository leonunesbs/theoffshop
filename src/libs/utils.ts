export function normalizeText(text: string) {
  return text
    .normalize('NFD') // Normaliza a string para a forma de decomposição canônica
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]/gi, '') // Remove caracteres não alfanuméricos
    .toLowerCase(); // Converte para minúsculo
}

export const categories = [
  { href: '?category=kit-pterigio', slug: 'kit-pterigio', title: 'Kits Pterígio' },
  { href: '?category=kit-catarata', slug: 'kit-catarata', title: 'Kits Catarata' },
  { href: '?category=laminas', slug: 'laminas', title: 'Lâminas' },
  { href: '?category=pincas', slug: 'pincas', title: 'Pinças' },
  { href: '?category=porta-agulhas', slug: 'porta-agulhas', title: 'Porta agulhas' },
  { href: '?category=tesouras', slug: 'tesouras', title: 'Tesouras' },
  { href: '?category=especiais', slug: 'especiais', title: 'Especiais' },
];
