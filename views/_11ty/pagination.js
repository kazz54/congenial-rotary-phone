// Pagination links : Based on Glenn Mc Comb
// https://glennmccomb.com/articles/how-to-build-custom-hugo-pagination/
// Adjacent: Number of links either side of the current page

exports.isShowAdjacent = function(cursor, current, totalPages, adjacentLinks) {
  // initialize variables
  let showCursorFlag = false;

  const maxLinks      = (adjacentLinks * 2) + 1;
  const lowerLimit    = 1 + adjacentLinks;
  const upperLimit    = totalPages - adjacentLinks;
  
  if (totalPages > maxLinks) {
    // Complex page numbers.
    
    if (current <= lowerLimit) {
      // Lower limit pages.
      // If the user is on a page which is in the lower limit.
      if (cursor <= maxLinks)
         showCursorFlag = true;
    } else if (current >= upperLimit) {
      // Upper limit pages.
      // If the user is on a page which is in the upper limit.
      if (cursor > (totalPages - maxLinks))
         showCursorFlag = true;
    } else {
      // Middle pages.
      if ( (cursor >= current - adjacentLinks)
      &&   (cursor <= current + adjacentLinks) )
         showCursorFlag = true;
    }
  } else {
    // Simple page numbers.
    showCursorFlag = true;
  }

  return showCursorFlag;
}
