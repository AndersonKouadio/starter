"use client"

import { Input } from '@heroui/react';
import { Search } from "lucide-react";
import { useQueryState } from 'nuqs'

export function AdminSearch() {
  const [search, setSearch] = useQueryState('search', {
    defaultValue: '',
    clearOnDefault: true,
  })

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <Input placeholder="Rechercher..."
        value={search ?? ""} onChange={(e) => handleSearch(e.target.value)}
        startContent={<Search />}
      />
    </div>

  );
}