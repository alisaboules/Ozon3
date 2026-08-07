export interface CategoryNode {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  children: CategoryNode[];
}

export function buildCategoryTree(categories: Omit<CategoryNode, "children">[]) {
  const map = new Map<number, CategoryNode>();

  categories.forEach((category) => {
    map.set(category.id, {
      ...category,
      parentId: category.parentId ?? null,
      children: [],
    });
  });

  const roots: CategoryNode[] = [];

  map.forEach((category) => {
    if (category.parentId === null) {
      roots.push(category);
    } else {
      map.get(category.parentId)?.children.push(category);
    }
  });

  return roots;
}