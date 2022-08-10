const alphabetical = (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
}

const usage = (a, b) => {
  const aCount = a.articles.length || 0;
  const bCount = b.articles.length || 0;
  if (aCount < bCount) return 1;
  if (bCount < aCount) return -1;
  return 0;
}

export {
  alphabetical,
  usage
}


