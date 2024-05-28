// src/utils/utils.js
export const cleanText = (text) => {
    // Reemplaza caracteres especiales y acentos
    const accentsMap = new Map([
      ["á", "a"], ["é", "e"], ["í", "i"], ["ó", "o"], ["ú", "u"],
      ["Á", "A"], ["É", "E"], ["Í", "I"], ["Ó", "O"], ["Ú", "U"],
      ["ñ", "n"], ["Ñ", "N"]
    ]);
  
    const cleanedText = text.split('').map(char => accentsMap.get(char) || char).join('');
  
    return cleanedText.toUpperCase();
  };
  