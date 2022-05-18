const mockSqlColumnReturn = (result) => {
  if (result === 'undefined') return [];
  return result.map(row => columns.map((column) => {
    if (row[column] === undefined) {
      return null;
    } else {
      return row[column];
    }
    }).reduce((a, v, i) => ({ ...a, [columns[i]]: v }), {}))
}

module.exports = mockSqlColumnReturn;

