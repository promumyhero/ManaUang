"use client"
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TransactionType } from '@/lib/types';
import { Category } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import CreateCategoryDialog from './CreateCategoryDialog';

interface Props {
  type: TransactionType;
}

function CategoryPicker({type}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: () =>
      fetch(`/api/categories?type=${type}`).then((res) => res.json()),
    initialData: [],
  });

  const selectedCategory = categoriesQuery.data?.find(
    (category: Category) => category.name === value
  ) || null; 

  return <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button variant={"outline"} role="combobox" aria-expanded={open} className="w-[200px] justify-between">
        {selectedCategory ? <CategoryRow category={selectedCategory} /> : "Select category"}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <CommandInput 
          placeholder="Search category..."
          value={inputValue}
          onValueChange={setInputValue}
        />
        <CreateCategoryDialog type={type} />
        <CommandEmpty>
          <p>
            Category not found.
          </p>
          <p
            className="text-xs text-muted-foreground"
          >
            Tip: Create a new category
          </p>
        </CommandEmpty>
        <CommandGroup>
          <CommandList>
            {categoriesQuery.data && categoriesQuery.data.map((category: Category) => (
              <CommandItem
                key={category.name}
                onSelect={currentValue => {
                  setValue(currentValue);
                  setOpen((prev) => !prev);
                }}
              >
                <CategoryRow category={category} />
              </CommandItem>
            ))}
          </CommandList>
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
}

export default CategoryPicker

function CategoryRow({ category }: { category: Category }) {
  return <div className="flex items-center gap-2">
    <span role="img">
      {category.icon}
    </span>
    <span>
      {category.name}
    </span>
  </div>
};