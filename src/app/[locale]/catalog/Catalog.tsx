'use client';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { cn } from '@/utils/cn';
import Galoshka from '@/assets/галочка.svg';

interface CategoryNode {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  children: CategoryNode[];
}

interface Props {
  tree: CategoryNode[];
}

export function CatalogContent({ tree }: Props) {
  const [activeId, setActiveId] = useState(tree[0]?.id);
  const activeCategory = tree.find((c) => c.id === activeId);
  const [expandedGroups, setExpandedGroups] = useState(new Set<number>());
  return (
    <div className="flex bg-background p-3 rounded-3xl">
      <div className="w-74">
        {tree.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={cn(
              'block w-full text-left p-3 rounded-lg hover:bg-gray-100',
              activeId === category.id && 'bg-gray-200 text-primary font-medium',
            )}>
            {category.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-200 w-px mx-3" />
      <div className="flex-1 pl-10">
        <h2 className="text-3xl font-bold mb-8 mt-1">{activeCategory?.name}</h2>

        <div className="grid grid-cols-3 gap-10">
          {activeCategory?.children.map((group) => {
            const expanded = expandedGroups.has(group.id);

            const visibleItems = expanded ? group.children : group.children.slice(0, 6);

            return (
              <div key={group.id}>
                <h3 className="font-semibold mb-3">{group.name}</h3>

                <div className="space-y-2">
                  {visibleItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/catalog/${item.slug}`}
                      className="block hover:text-blue-500">
                      {item.name}
                    </Link>
                  ))}

                  {group.children.length > 6 && (
                    <button
                      onClick={() => {
                        const next = new Set(expandedGroups);
                        if (next.has(group.id)) {
                          next.delete(group.id);
                        } else {
                          next.add(group.id);
                        }
                        setExpandedGroups(next);
                      }}
                      className="group text-primary hover:text-black">
                      {expanded ? (
                        <div className='flex gap-1 items-center justify-center'>
                            <span>Скрыть</span>
                            <Galoshka className='text-primary mb-3 group-hover:text-black w-5 h-5 -rotate-90' />
                          </div>
                         ) : ( 
                          <div className='flex gap-1 items-center justify-center'>
                            <span>Ещё</span>
                            <Galoshka className='text-primary mt-4 group-hover:text-black w-5 h-5 rotate-90' />
                          </div>
                        )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
