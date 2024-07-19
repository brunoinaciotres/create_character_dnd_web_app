export default class Sheet {
    #raceSelected;
    #classSelected;
    #backgroundSelected;
    #strength;
    #constitution;
    #dexterity;
    #wisdom;
    #intelligence;
    #charisma;
    #strengthModifier;
    #constitutionModifier;
    #dexterityModifier;
    #wisdomModifier;
    #intelligenceModifier;
    #charismaModifier;

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

    getRace() {
        return this.#raceSelected
    }

    setClass(aClass) {
        this.#classSelected = aClass
    }
    getClass() {
        return this.#classSelected
    }

    setBackground(background) {
        this.#backgroundSelected = background
    }

    getBackground() {
        return this.#backgroundSelected
    }

    setStrength(str) {
        this.#strength = str
        this.setStrengthModifier(str)
    }

    getStrength() {
        return this.#strength
    }

    setConstitution(con) {
        this.#constitution = con
        this.setConstitutionModifier(con)
    }

    getConstitution() {
        return this.#constitution
    }

    setDexterity(dex) {
        this.#dexterity = dex
        this.setDexterityModifier(dex)
    }
    getDexterity() {
        return this.#dexterity
    }

    setWisdom(wis) {
        this.#wisdom = wis
        this.setWisdomModifier(wis)
    }

    getWisdom() {
        return this.#wisdom
    }

    setIntelligence(int) {
        this.#intelligence = int
        this.setIntelligenceModifier(int)
    }

    getIntelligence() {
        return this.#intelligence
    }

    setCharisma(char) {
        this.#charisma = char
        this.setCharismaModifier(char)
    }

    getCharisma() {
        return this.#charisma
    }

    setStrengthModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#strengthModifier = modifier

    }

    setConstitutionModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#constitutionModifier = modifier

    }

    setDexterityModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#dexterityModifier = modifier

    }

    setWisdomModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#wisdomModifier = modifier

    }

    setIntelligenceModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#intelligenceModifier = modifier

    }

    setCharismaModifier(skillValue) {
        
        let modifier = Math.floor((skillValue - 10)/ 2) 
        this.#charismaModifier = modifier

    }

    getStrengthModifier(){
        return this.#strengthModifier
    }

    getConstitutionModifier(){
        return this.#constitutionModifier
    }

    getDexterityModifier(){
        return this.#dexterityModifier
    }

    getWisdomModifier(){
        return this.#wisdomModifier
    }

    getIntelligenceModifier(){
        return this.#intelligenceModifier
    }

    getCharismaModifier(){
        return this.#charismaModifier
    }

}