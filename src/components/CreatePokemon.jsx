import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { DropDown } from "./DropDown";
import { Button } from "./ui/button";

import { supabase } from "@/client";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({ name: "", type: "", hp: "" });
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlePokemonTypeChange = (type) => {
    setPokemonType(type);
    setPokemon((prev) => ({
      ...prev,
      type: type,
    }));
  };

  const createPokemon = async (event) => {
    event.preventDefault();
    await supabase
      .from("pokemon")
      .insert({ name: pokemon.name, type: pokemon.type, hp: pokemon.hp })
      .select();

    window.location = "/gallery";
  };

  console.log(pokemon);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col text-center w-[500px] gap-20">
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Enter a Pokemon name..."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>HP</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="number"
              min="1"
              max="255"
              id="hp"
              name="hp"
              onChange={handleChange}
              placeholder="Enter a HP value..."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Type</CardTitle>
          </CardHeader>
          <CardContent>
            <DropDown
              pokemonType={pokemonType}
              setPokemonType={handlePokemonTypeChange}
            />
          </CardContent>
        </Card>

        <Button type="submit" onClick={createPokemon}>
          Create Pokemon
        </Button>
      </div>
    </div>
  );
};

export default CreatePokemon;
