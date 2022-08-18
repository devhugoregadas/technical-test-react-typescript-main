import React, { useState, useEffect } from "react";
import { getAll, getByName, getImageById, Pokemon } from "./API";
import PokemonRow from "./PokemonRow";
import PreviewPokemon from "./PreviewPokemon";

import "./styles.css";

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

export default function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [powerThres, setPowerThres] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (selectedPokemon) {
      getImageById(selectedPokemon.id).then((image) => {
        setImage(image);
      });
    }
  }, [selectedPokemon]);

  useEffect(() => {
    if (searchInput === "") {
      getAll().then((data) => {
        const filtered = data.filter((pokemon) => {
          return calculatePower(pokemon) >= powerThres;
        });
        setPokemons(filtered);

        const sorted = filtered.sort((pokemon1, pokemon2) => {
          return calculatePower(pokemon1) - calculatePower(pokemon2);
        });

        setMinValue(calculatePower(sorted[0]));
        setMaxValue(calculatePower(sorted[sorted.length - 1]));
      });
    } else {
      getByName(searchInput).then((data) => {
        const filtered = data.filter((pokemon) => {
          return calculatePower(pokemon) >= powerThres;
        });
        setPokemons(filtered);

        const sorted = filtered.sort((pokemon1, pokemon2) => {
          return calculatePower(pokemon1) - calculatePower(pokemon2);
        });

        setMinValue(calculatePower(sorted[0]));
        setMaxValue(calculatePower(sorted[sorted.length - 1]));
      });
    }

  }, [searchInput, powerThres]);

  return (
    <div className="p-2">
      <div className="top-bar">
        <div className="search">Search</div>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          className="border-2"
        ></input>
        <label htmlFor="powerThres">Power threshold</label>
        <input
          type="string"
          value={powerThres}
          id="powerThres"
          data-testid="power-input"
          min={0}
          onChange={(event) => {
            setPowerThres(parseInt(event.target.value) || 0);
          }}
          className="border-2"
        ></input>
        <div>Count: {pokemons.length || 0} </div>
        <div>Min: {minValue || 0} </div>
        <div>Max: {maxValue || 0} </div>
      </div>

      <div className="flex gap-6">
        <table className="table-collapse flex-1">
          <thead>
            <tr className="">
              <th className="">ID</th>
              <th className="">Name</th>
              <th className="">Type</th>
              <th className="" colSpan={6}>
                Stats
              </th>
              <th className="">Power</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon: Pokemon) => {
              return (
                <PokemonRow
                  pokemon={pokemon}
                  selectedPokemon={selectedPokemon}
                  setSelectedPokemon={setSelectedPokemon}
                  power={calculatePower(pokemon)}
                />
              );
            })}
          </tbody>
        </table>
        {selectedPokemon && (
          <PreviewPokemon
            selectedPokemon={selectedPokemon}
            power={calculatePower(selectedPokemon)}
            image={image}
          />
        )}
      </div>
    </div>
  );
}
