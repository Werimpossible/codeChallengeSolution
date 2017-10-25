function findShortestOfThreeWords(word1, word2, word3){
  var ing1= word1.length;
  var ing2= word2.length;
  var ing3= word3.length;
  if(ing1 <= ing2 && ing1 <= ing3){
    return word1;
  }else if(ing2 < ing1 && ing2 <= ing3){
    return word2;
  }else{
    return word3;
  }
}

findShortestOfThreeWords("muebleria", "pizarron", "decanso")
