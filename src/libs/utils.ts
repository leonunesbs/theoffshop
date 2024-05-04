export function normalizeText(text: string) {
  return text
    .normalize('NFD') // Normaliza a string para a forma de decomposição canônica
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]/gi, '') // Remove caracteres não alfanuméricos
    .toLowerCase(); // Converte para minúsculo
}
