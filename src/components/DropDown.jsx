import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropDown({ pokemonType, setPokemonType }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg">
          {pokemonType === "" ? "Select the Pokemon's type 👇" : pokemonType}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pokemon Types</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={pokemonType}
          onValueChange={setPokemonType}
          className="max-h-[300px] overflow-y-auto"
        >
          <DropdownMenuRadioItem value="Fighting">
            Fighting
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Water">Water</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Normal">Normal</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Grass">Grass</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Flying">Flying</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Psychic">Psychic</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Bug">Bug</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Fire">Fire</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Poison">Poison</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Ground">Ground</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Rock">Rock</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Steel">Steel</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Electric">
            Electric
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Dragon">Dragon</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Ghost">Ghost</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Fairy">Fairy</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Ice">Ice</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
