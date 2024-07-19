export default class Sheet {
    #raceSelected;
    #classSelected;
    #backgroundSelected;
    #strength ;
    #constitution ;
    #dexterity ;
    #wisdom ;
    #intelligence ;
    #charisma;

    constructor() {
        this.#raceSelected = null,
        this.#classSelected = null,
        this.#backgroundSelected = null
        this.#strength = null,
        this.#constitution = null,
        this.#dexterity = null,
        this.#wisdom = null,
        this.#intelligence = null,
        this.#charisma = null
    }

    setRace(race) {
        this.#raceSelected = race
    }

    getRace(){
        return this.#raceSelected
    }

    setClass(aClass) {
        this.#classSelected = aClass
    }
    getClass(){
        return this.#classSelected
    }

    setBackground(background) {
        this.#backgroundSelected = background
    }

    getBackground(){
        return this.#backgroundSelected
    }

    setStrength(str) {
        this.#strength = str
    }

    getStrength(){
        return this.#strength
    }

    setConstitution(con) {
        this.#constitution = con
    }

    getConstitution(){
        return this.#constitution
    }

    setDexterity(dex) {
        this.#dexterity = dex
    }
    getDexterity(){
        return this.#dexterity
    }

    setWisdom(wis){
        this.#wisdom = wis
    }

    getWisdom(){
        return this.#wisdom
    }

    setIntelligence(int) {
        this.#intelligence = int
    }

    getIntelligence(){
        return this.#intelligence
    }

    setCharisma(char) {
        this.#charisma = char
    }

    getCharisma(){
        return this.#charisma
    }

}