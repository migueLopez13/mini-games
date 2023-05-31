export function removeAccentMarks(text: string): string {
    const accentMap = {
      Á: 'A',
      É: 'E',
      Í: 'I',
      Ó: 'O',
      Ú: 'U',
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
    };
  
    return text.replace(/[ÁÉÍÓÚáéíóú]/g, (match) => accentMap[match]);
  }
  