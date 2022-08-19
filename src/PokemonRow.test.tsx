import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import "./setupTests";

import PokemonRow from "./PokemonRow";
import userEvent from "@testing-library/user-event";


const Pokemon = {
    "id": 1,
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "special_attack": 65,
    "special_defense": 65,
    "speed": 45
}

const props ={
    selectedPokemon: Pokemon,
    pokemon:  Pokemon,
    setSelectedPokemon: jest.fn(),
    power:300
}


describe("display Pokemon",()=>{
    it("display Bulbasaur ",()=>{
      render(<PokemonRow {...props}/>);
      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
       
    })
    it("display Bulbasaur ",()=>{
        render(<PokemonRow {...props}/>);
        const findPokemon = screen.getByTestId('set-pokemon');
        userEvent.click(findPokemon);  
      })
})