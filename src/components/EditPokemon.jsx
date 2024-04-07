import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { DropDown } from "./DropDown";
import { Button } from "./ui/button";

import { supabase } from "@/client";

const EditPokemon = () => {
  const [pokemon, setPokemon] = useState({ name: "", type: "", hp: "" });
  const [pokemonType, setPokemonType] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await supabase
        .from("pokemon")
        .select()
        .eq("id", id) // Filter by the id retrieved from the URL
        .single(); // Get a single row
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]);

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

  const updatePokemon = async (event) => {
    event.preventDefault();
    await supabase
      .from("pokemon")
      .update({ name: pokemon.name, type: pokemon.type, hp: pokemon.hp })
      .eq("id", id);

    window.location = "/gallery";
  };

  const deletePokemon = async (event) => {
    event.preventDefault();
    await supabase.from("pokemon").delete().eq("id", id);

    window.location = "/gallery";
  };

  return (
    <div className="flex flex-col justify-center items-center">
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
              value={pokemon.name}
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
              value={pokemon.hp}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Type</CardTitle>
          </CardHeader>
          <CardContent>
            <DropDown
              pokemonType={pokemon.type}
              setPokemonType={handlePokemonTypeChange}
            />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-5">
          <Button type="submit" onClick={updatePokemon}>
            Update Pokemon
          </Button>
          <Button type="submit" variant="destructive" onClick={deletePokemon}>
            Delete Pokemon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPokemon;
