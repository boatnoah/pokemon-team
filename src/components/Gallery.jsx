import { useState, useEffect } from "react";
import { supabase } from "@/client";
import { Link } from "react-router-dom"; // Import the Link component
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Gallery = () => {
  const [pokemons, setPokemon] = useState([]);

  const typeToImageMap = {
    Bug: "src/assets/pokemon-types/bug.png",
    Dark: "src/assets/pokemon-types/dark.png",
    Dragon: "src/assets/pokemon-types/dragon.png",
    Electric: "src/assets/pokemon-types/electric.png",
    Fairy: "src/assets/pokemon-types/fairy.png",
    Fighting: "src/assets/pokemon-types/fighting.png",
    Fire: "src/assets/pokemon-types/fire.png",
    Flying: "src/assets/pokemon-types/flying.png",
    Ghost: "src/assets/pokemon-types/ghost.png",
    Grass: "src/assets/pokemon-types/grass.png",
    Ground: "src/assets/pokemon-types/ground.png",
    Ice: "src/assets/pokemon-types/ice.png",
    Normal: "src/assets/pokemon-types/normal.png",
    Poison: "src/assets/pokemon-types/poison.png",
    Psychic: "src/assets/pokemon-types/psychic.png",
    Rock: "src/assets/pokemon-types/rock.png",
    Steel: "src/assets/pokemon-types/steel.png",
    Water: "src/assets/pokemon-types/water.png",
  };

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await supabase
        .from("pokemon")
        .select()
        .order("created_at", { ascending: true });
      setPokemon(data);
    };

    fetchPokemon(); // Call the function within the useEffect hook
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="flex justify-center items-center gap-20">
      {pokemons && pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            {/* Wrap the Card component with the Link */}
            <Card id={pokemon.id}>
              <CardHeader>
                <CardTitle>{pokemon.name}</CardTitle>
                <img src={typeToImageMap[pokemon.type]} />
              </CardHeader>
              <CardContent>
                <Badge>{pokemon.type}</Badge>
                <h2 className="font-bold">HP: {pokemon.hp}</h2>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Edit</Button>
              </CardFooter>
            </Card>
          </Link>
        ))
      ) : (
        <Progress
          className="align-middle h-[10px] w-[100px]"
          value={progress}
        />
      )}
    </div>
  );
};

export default Gallery;
