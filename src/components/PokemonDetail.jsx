import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import the useParams hook
import { supabase } from "@/client";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bugImage from "@/assets/pokemon-types/bug.png";
import darkImage from "@/assets/pokemon-types/dark.png";
import dragonImage from "@/assets/pokemon-types/dragon.png";
import electricImage from "@/assets/pokemon-types/electric.png";
import fairyImage from "@/assets/pokemon-types/fairy.png";
import fightingImage from "@/assets/pokemon-types/fighting.png";
import fireImage from "@/assets/pokemon-types/fire.png";
import flyingImage from "@/assets/pokemon-types/flying.png";
import ghostImage from "@/assets/pokemon-types/ghost.png";
import grassImage from "@/assets/pokemon-types/grass.png";
import groundImage from "@/assets/pokemon-types/ground.png";
import iceImage from "@/assets/pokemon-types/ice.png";
import normalImage from "@/assets/pokemon-types/normal.png";
import poisonImage from "@/assets/pokemon-types/poison.png";
import psychicImage from "@/assets/pokemon-types/psychic.png";
import rockImage from "@/assets/pokemon-types/rock.png";
import steelImage from "@/assets/pokemon-types/steel.png";
import waterImage from "@/assets/pokemon-types/water.png";
// React routing messes with relative paths

const PokemonDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameters
  const [pokemon, setPokemon] = useState(null);

  const typeToImageMap = {
    Bug: bugImage,
    Dark: darkImage,
    Dragon: dragonImage,
    Electric: electricImage,
    Fairy: fairyImage,
    Fighting: fightingImage,
    Fire: fireImage,
    Flying: flyingImage,
    Ghost: ghostImage,
    Grass: grassImage,
    Ground: groundImage,
    Ice: iceImage,
    Normal: normalImage,
    Poison: poisonImage,
    Psychic: psychicImage,
    Rock: rockImage,
    Steel: steelImage,
    Water: waterImage,
  };

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
  }, [id]); // Re-run the effect when the id changes

  return (
    <div className="flex justify-center items-center">
      {pokemon ? (
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-xl">{pokemon.name.toUpperCase()}</h1>
          <img src={typeToImageMap[pokemon.type]} />
          <p className="font-bold text-lg">Type: {pokemon.type}</p>
          <p className="font-bold text-lg">HP: {pokemon.hp}</p>
          <h2 className="font-bold text-lg">
            {pokemon.hp > 100
              ? "WOW! This pokemon is strong!"
              : "Ehh.. this one seems fragile."}
          </h2>

          <Link to={`/edit/${pokemon.id}`}>
            <Button>Edit {pokemon.name}</Button>
          </Link>
        </div>
      ) : (
        <Progress className="align-middle h-[10px] w-[100px]" value={100} />
      )}
    </div>
  );
};

export default PokemonDetails;
