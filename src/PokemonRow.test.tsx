import React, { SetStateAction } from "react";
import { render } from "@testing-library/react";
import PokemonRow from "./PokemonRow"
import { Pokemon } from "./API";

test.todo("select the Pokemon on the list"), () => {
    const items = [
        {
            id: 1,
            name: "Bulbasaur",
            type: ["Grass", "Poison"],
            attack: 49,
            defense: 49,
            speed: 45,
            hp: 45,
            special_attack: 65,
            special_defense: 65,
        },
    ]
    render(<PokemonRow pokemon={items[0]} selectedPokemon={undefined} setSelectedPokemon={function (value: SetStateAction<Pokemon | null | undefined>): void {
        throw new Error("Function not implemented.");
    } } power={0} />)
}