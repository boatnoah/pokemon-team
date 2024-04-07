import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { DropDown } from "./DropDown";
import { Button } from "./ui/button";

const CreatePokemon = () => {
  const [pokemonType, setPokemonType] = useState("");
  console.log(pokemonType);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col text-center w-[500px] gap-20">
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="text" placeholder="Enter a Pokemon name..." />
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
              setPokemonType={setPokemonType}
            />
          </CardContent>
        </Card>

        <Button>Create Pokemon</Button>
      </div>
    </div>
  );
};

export default CreatePokemon;
