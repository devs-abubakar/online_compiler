"use client";

import {Button, Dropdown, Header, Label} from "@heroui/react";
import {useState} from "react";

export function Dropdownselection() {
  const [selected, setSelected] = useState(new Set(["javascript"]));
  
  const langs = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { id: 'cpp', label: 'C++' },
    { id: 'html', label: 'HTML' },
  ];

  return (
    <Dropdown>
      <Button className={'bg-transparent'} aria-label="Menu" variant="primary">
        language
      </Button>
      <Dropdown.Popover className="min-w-[256px]">
        <Dropdown.Menu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={setSelected}
        >
          <Dropdown.Section>
            <Header>Select a Language</Header>
            {/* CORRECTED MAP BELOW */}
            {langs.map(({ id, label }) => (
              <Dropdown.Item key={id} textValue={label}>
                <Dropdown.ItemIndicator />
                <Label>{label}</Label>
              </Dropdown.Item>
            ))}
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
