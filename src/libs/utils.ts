export function normalizeText(text: string) {
  return text
    .normalize('NFD') // Normaliza a string para a forma de decomposição canônica
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-zA-Z0-9]/g, '') // Remove caracteres especiais, mantendo letras e números
    .toLowerCase(); // Converte para minúsculo
}

export const categories = [
  { href: '/kit-pterigio', slug: 'kit-pterigio', title: 'Kits Pterígio' },
  { href: '/kit-catarata', slug: 'kit-catarata', title: 'Kits Catarata' },
  { href: '/laminas', slug: 'laminas', title: 'Lâminas' },
  { href: '/pincas', slug: 'pincas', title: 'Pinças' },
  { href: '/porta-agulhas', slug: 'porta-agulhas', title: 'Porta agulhas' },
  { href: '/tesouras', slug: 'tesouras', title: 'Tesouras' },
  { href: '/especiais', slug: 'especiais', title: 'Especiais' },
];
