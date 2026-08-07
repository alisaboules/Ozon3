type Category = {
  id: number;
  parentId: number | null;
};

export function getDescendantIds(
  categories: Category[],
  rootId: number,
): number[] {
  const result: number[] = [rootId];

  function dfs(parentId: number) {
    for (const category of categories) {
      if (category.parentId === parentId) {
        result.push(category.id);
        dfs(category.id);
      }
    }
  }

  dfs(rootId);

  return result;
}